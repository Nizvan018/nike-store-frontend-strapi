export type Response<T> = {
    succes: true;
    data: T;
} | {
    succes: false;
    error: string;
};