import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, of, Subscription } from 'rxjs';
import {
    SearchResponse,
    SearchResult,
    SearchStateService,
} from '../search-state.service';

type SearchParameters = {
    name: string;
    /** Add filters here */
};

enum SearchStatus {
    initial,
    searching,
    complete,
}

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
    public SearchStatus = SearchStatus;

    public searchForm: FormGroup;
    public searchResults: SearchResult[] = [];
    public currentSearchSatus: SearchStatus = SearchStatus.initial;

    private searchSubscription!: Subscription;
    constructor(
        private searchState: SearchStateService,
        private formBuilder: FormBuilder
    ) {
        this.searchForm = this.formBuilder.group({
            name: [''],
        });
    }

    public search(): void {
        const searchData = this.searchForm.value as SearchParameters;
        if (searchData.name) {
            this.currentSearchSatus = SearchStatus.searching;
            this.searchResults = [];
            this.searchSubscription?.unsubscribe();
            this.searchSubscription = this.searchState
                .getUsers(searchData.name)
                .pipe(catchError((error) => of(error)))
                .subscribe((response) => {
                    const data = response as SearchResponse;
                    this.searchResults = data?.items || [];
                    this.currentSearchSatus = SearchStatus.complete;
                });
        }
    }

    public ngOnDestroy(): void {
        this.searchSubscription?.unsubscribe();
    }
}
