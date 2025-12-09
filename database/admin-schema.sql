-- =====================================================
-- E-Fin Admin & Role-Based Access Control (RBAC) Schema
-- =====================================================

-- Roles Table
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE,
    display_name VARCHAR(100) NOT NULL,
    description TEXT,
    level INT NOT NULL DEFAULT 0, -- Higher level = more power (super_admin=100, admin=50, user=0)
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_role_name (role_name),
    INDEX idx_level (level)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- User Roles Table (Many-to-Many relationship)
CREATE TABLE IF NOT EXISTS user_roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    assigned_by INT, -- Who assigned this role
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NULL, -- Optional: temporary roles
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_by) REFERENCES users(id) ON DELETE SET NULL,
    UNIQUE KEY unique_user_role (user_id, role_id),
    INDEX idx_user_id (user_id),
    INDEX idx_role_id (role_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Permissions Table
CREATE TABLE IF NOT EXISTS permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    permission_name VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(150) NOT NULL,
    description TEXT,
    module VARCHAR(50), -- e.g., 'users', 'loans', 'reports', 'settings'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_permission_name (permission_name),
    INDEX idx_module (module)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Role Permissions Table (Many-to-Many relationship)
CREATE TABLE IF NOT EXISTS role_permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    granted_by INT, -- Who granted this permission
    granted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE,
    FOREIGN KEY (granted_by) REFERENCES users(id) ON DELETE SET NULL,
    UNIQUE KEY unique_role_permission (role_id, permission_id),
    INDEX idx_role_id (role_id),
    INDEX idx_permission_id (permission_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Admin Activity Log (Track all admin actions)
CREATE TABLE IF NOT EXISTS admin_activity_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_user_id INT NOT NULL,
    action_type VARCHAR(100) NOT NULL, -- e.g., 'user_created', 'user_blocked', 'role_assigned'
    target_user_id INT, -- User affected by the action
    description TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    metadata JSON, -- Additional data about the action
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (admin_user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (target_user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_admin_user_id (admin_user_id),
    INDEX idx_action_type (action_type),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Insert Default Roles
-- =====================================================

INSERT INTO roles (role_name, display_name, description, level) VALUES
('super_admin', 'Super Administrator', 'Has complete control over the entire system with all privileges', 100),
('admin', 'Administrator', 'Can manage users, view reports, and handle customer support', 50),
('user', 'Regular User', 'Standard user with access to loan applications and personal dashboard', 0)
ON DUPLICATE KEY UPDATE role_name=role_name;

-- =====================================================
-- Insert Default Permissions
-- =====================================================

INSERT INTO permissions (permission_name, display_name, module, description) VALUES
-- User Management
('users.view_all', 'View All Users', 'users', 'View all user accounts and their details'),
('users.create', 'Create Users', 'users', 'Create new user accounts'),
('users.edit', 'Edit Users', 'users', 'Edit existing user information'),
('users.delete', 'Delete Users', 'users', 'Delete or deactivate user accounts'),
('users.verify_kyc', 'Verify KYC', 'users', 'Approve or reject user KYC documents'),

-- Admin Management
('admins.view_all', 'View All Admins', 'admins', 'View all admin accounts'),
('admins.create', 'Create Admins', 'admins', 'Create new admin accounts'),
('admins.edit', 'Edit Admins', 'admins', 'Edit existing admin accounts'),
('admins.delete', 'Delete Admins', 'admins', 'Delete admin accounts'),

-- Role Management
('roles.view', 'View Roles', 'roles', 'View all roles and permissions'),
('roles.assign', 'Assign Roles', 'roles', 'Assign roles to users'),
('roles.create', 'Create Roles', 'roles', 'Create new roles'),
('roles.delete', 'Delete Roles', 'roles', 'Delete existing roles'),

-- Loan Management
('loans.view_all', 'View All Loans', 'loans', 'View all loan applications'),
('loans.approve', 'Approve Loans', 'loans', 'Approve or reject loan applications'),
('loans.modify', 'Modify Loans', 'loans', 'Modify loan terms and conditions'),

-- Reports & Analytics
('reports.view', 'View Reports', 'reports', 'Access reports and analytics dashboard'),
('reports.export', 'Export Reports', 'reports', 'Export reports in various formats'),

-- System Settings
('settings.view', 'View Settings', 'settings', 'View system settings'),
('settings.edit', 'Edit Settings', 'settings', 'Modify system configurations'),

-- Activity Logs
('logs.view', 'View Activity Logs', 'logs', 'View user and admin activity logs'),
('logs.export', 'Export Logs', 'logs', 'Export activity logs')

ON DUPLICATE KEY UPDATE permission_name=permission_name;

-- =====================================================
-- Assign Permissions to Roles
-- =====================================================

-- Super Admin gets ALL permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r
CROSS JOIN permissions p
WHERE r.role_name = 'super_admin'
ON DUPLICATE KEY UPDATE role_id=role_id;

-- Admin gets most permissions (except admin management and role creation)
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r
CROSS JOIN permissions p
WHERE r.role_name = 'admin'
AND p.permission_name IN (
    'users.view_all',
    'users.create',
    'users.edit',
    'users.verify_kyc',
    'loans.view_all',
    'loans.approve',
    'loans.modify',
    'reports.view',
    'reports.export',
    'settings.view',
    'logs.view'
)
ON DUPLICATE KEY UPDATE role_id=role_id;

-- Regular users have no admin permissions (handled at application level)

-- =====================================================
-- Create Super Admin Account
-- =====================================================

-- Insert Super Admin User
-- Password: SuperAdmin@2025 (hashed with bcrypt)
INSERT INTO users (
    email, 
    password_hash, 
    first_name, 
    last_name, 
    is_verified, 
    is_active, 
    kyc_status,
    email_verified_at
) VALUES (
    'superadmin@efin.co.in',
    '$2b$10$YXq5Z8qJ3xVJKGJQX8oDOuBMXWJVLQK5EH9QxGKJYVKkGQHQVKGCi',
    'Super',
    'Admin',
    TRUE,
    TRUE,
    'completed',
    NOW()
) ON DUPLICATE KEY UPDATE email=email;

-- Assign Super Admin Role
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id
FROM users u
CROSS JOIN roles r
WHERE u.email = 'superadmin@efin.co.in'
AND r.role_name = 'super_admin'
ON DUPLICATE KEY UPDATE user_id=user_id;

-- =====================================================
-- Create Default Admin Account
-- =====================================================

-- Insert Admin User
-- Password: Admin@2025 (hashed with bcrypt)
INSERT INTO users (
    email, 
    password_hash, 
    first_name, 
    last_name, 
    is_verified, 
    is_active, 
    kyc_status,
    email_verified_at
) VALUES (
    'admin@efin.co.in',
    '$2b$10$rKZWvXhQqVYJYHZBGhWJjO.xBLG7GqW0wDXqKXGJYVKkGQHQVKGCi',
    'Admin',
    'User',
    TRUE,
    TRUE,
    'completed',
    NOW()
) ON DUPLICATE KEY UPDATE email=email;

-- Assign Admin Role
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id
FROM users u
CROSS JOIN roles r
WHERE u.email = 'admin@efin.co.in'
AND r.role_name = 'admin'
ON DUPLICATE KEY UPDATE user_id=user_id;
