import { useCallback, useEffect, useRef, useState } from "react";

type UseFetchData<T> = T | null;
type UseFetchError = Error | null;

interface UseFetchResponse<T> {
    loading: boolean;
    data: UseFetchData<T>;
    error: UseFetchError;
    fetchCall: () => void;
}

const useFetch = <T>(url: string, options?: RequestInit, autoFetch?: boolean): UseFetchResponse<T> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<UseFetchData<T>>(null);
    const [error, setError] = useState<UseFetchError>(null);
    const controllerRef = useRef<AbortController | null>(null);

    const fetchCall = useCallback(async () => {
        setLoading(true);

        const controller = new AbortController();
        controllerRef.current = controller;

        fetch(url, { ...options, signal: controller.signal })
            .then(async (res) => {
                if (!res.ok) {
                    const error = await res.json();
                    throw new Error(error.error || error.message || "Something went wrong");
                }

                const data = await res.json();

                setData(data);
                setError(null);
            }).catch(error => {
                console.error(error);
                setError(error);
                setData(null);
            }).finally(() => {
                setLoading(false);
            });
    }, [options, url]);

    useEffect(() => {
        if (autoFetch) {
            fetchCall();
        }

        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort("Desmounted component");
            }
        }
    }, [autoFetch, fetchCall]);

    return { data, error, loading, fetchCall }
}

export default useFetch;
