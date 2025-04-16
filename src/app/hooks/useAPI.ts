import { useEffect, useState, useCallback } from "react";

type Data<T> = T | null;
type CustomError = Error | null;

interface UseAPIOptions {
    autoFetch?: boolean;
}

interface UseAPICall<T> {
    call: () => Promise<{ data: T }>;
    controller: AbortController;
}

interface UseAPIResponse<T> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    fetchFunction: () => void;
}

export const useAPI = <T>(apiCall: UseAPICall<T>, options?: UseAPIOptions): UseAPIResponse<T> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Data<T>>(null);
    const [error, setError] = useState<CustomError>(null);

    const fetchFunction = useCallback(() => {
        const { call, controller } = apiCall;

        setLoading(true);

        call().then((response) => {
            setData(response.data);
            setError(null);
        }).catch((error) => {
            setData(null);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });

        return () => controller.abort();
    }, [apiCall]);

    useEffect(() => {
        if (options?.autoFetch) {
            return fetchFunction();
        }
    }, [fetchFunction, options]);

    return { loading, data, error, fetchFunction };
}