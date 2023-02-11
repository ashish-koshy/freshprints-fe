import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';

const routes: Routes = [
    {
        path: '',
        component: HistoryComponent,
    },
];

@NgModule({
    declarations: [HistoryComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HistoryModule {}
