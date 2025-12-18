import { useState } from 'react';

const API_URL = 'http://localhost:5003/api/leads/capture';

export const useLeadCapture = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const captureLead = async (leadData) => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(leadData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to capture lead');
            }

            setIsSuccess(true);
            return data;
        } catch (err) {
            setError(err.message);
            console.error('Lead capture error:', err);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return { captureLead, isLoading, error, isSuccess };
};
