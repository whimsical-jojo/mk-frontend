import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Appointments } from './pages/appointments/appointments';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'termine',
        component: Appointments
    }
];
