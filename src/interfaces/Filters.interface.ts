export type Category = 'healthy' | 'junk' | 'italian' | 'all';

export interface Filtersinterface {
    search: string;
    priceRange: [number, number];
    category: Category;
}

export interface FilterUpdate {
    search?: string;
    priceRange?: [number, number];
    category?: Category;
}