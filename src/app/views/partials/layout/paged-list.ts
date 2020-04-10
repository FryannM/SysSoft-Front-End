export interface PagedList<T> {
    data: T[];
    page: number;
    pageSize: number;
    records: number;
    pages: number;
}