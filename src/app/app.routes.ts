import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Appointments } from './pages/appointments/appointments';
import { Publications } from './pages/publications/publications';
import { Readings } from './pages/readings/readings';

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
    },
    {
        path: 'lesungen',
        component: Readings
    }
];
