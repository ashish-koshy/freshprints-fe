import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SearchResultModule,
        ReactiveFormsModule,
    ],
})
export class SearchModule {}
