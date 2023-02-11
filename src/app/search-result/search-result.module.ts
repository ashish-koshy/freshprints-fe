import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result.component';

@NgModule({
    declarations: [SearchResultComponent],
    imports: [CommonModule],
    exports: [SearchResultComponent],
})
export class SearchResultModule {}
