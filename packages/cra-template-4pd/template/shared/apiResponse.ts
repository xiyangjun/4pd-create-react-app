export interface ApiResponse<T> {
    status: '0' | '1';
    data?: T;
    error?: string;
}