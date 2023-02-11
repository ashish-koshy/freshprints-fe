import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, tap, timeout } from 'rxjs';
import { HttpService } from './http.service';

export type SearchHistory = Map<string, SearchResult | null>;

export type SearchResult = {
    id?: number;
    type?: string;
    login?: string;
    avatar_url?: string;
};

export type SearchResponse = {
    total_count?: number;
    items?: SearchResult[];
    incomplete_results?: boolean;
};

@Injectable({
    providedIn: 'root',
})
export class SearchStateService {
    private searchHistory = new BehaviorSubject<SearchHistory>(new Map());
    constructor(private http: HttpService) {}

    private updateSearchHistory(
        query: string,
        result: SearchResult | null = null
    ): void {
        const pastSearches = this.searchHistory.value;
        pastSearches.set(query, result);
        this.searchHistory.next(pastSearches);
    }

    public getUsers(name: string) {
        const query = name?.toLowerCase();
        this.updateSearchHistory(query);
        return this.http.get(`search/users?q=${query}`).pipe(
            debounceTime(1000),
            timeout(10000),
            tap((response) => {
                const searchResponse = response as SearchResponse;
                searchResponse?.items?.filter(
                    (item) =>
                        item?.login?.toLowerCase() === query?.toLowerCase() &&
                        this.updateSearchHistory(query, item)
                );
            })
        );
    }

    public getSearchHistory() {
        return this.searchHistory.asObservable();
    }
}
