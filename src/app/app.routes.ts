import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
