import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultModule } from '../search-result/search-result.module';
import { SearchComponent } from './search.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
    },
];

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SearchResultModule],
})
export class SearchModule {}
