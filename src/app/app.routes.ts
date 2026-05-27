import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Appointments } from './pages/appointments/appointments';
import { Publications } from './pages/publications/publications';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'termine',
        component: Appointments
    },
    {
        path: 'publikationen',
        component: Publications
    }
];
