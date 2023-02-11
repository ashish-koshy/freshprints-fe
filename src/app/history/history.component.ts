import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SearchHistory, SearchStateService } from '../search-state.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
    public searchKeys: string[] = [];
    public searchHistory: SearchHistory = new Map();

    private searchStateSubscription!: Subscription;
    constructor(private searchStateService: SearchStateService) {}

    ngOnInit(): void {
        this.searchStateSubscription = this.searchStateService
            .getSearchHistory()
            .pipe(
                tap((data) => {
                    this.searchHistory = data;
                    this.searchKeys = Array.from(data?.keys());
                })
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.searchStateSubscription?.unsubscribe();
    }
}
