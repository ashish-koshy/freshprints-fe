import { Component, Input } from '@angular/core';
import { SearchResult } from '../search-state.service';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
    @Input() data: SearchResult | undefined = undefined;
}
