import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'search',
            },
            {
                path: 'search',
                loadChildren: () =>
                    import('./search/search.module').then(
                        (m) => m.SearchModule
                    ),
            },
            {
                path: 'history',
                loadChildren: () =>
                    import('./history/history.module').then(
                        (m) => m.HistoryModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
