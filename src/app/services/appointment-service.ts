import { Injectable } from '@angular/core';
import { fetchCollection } from '../utils/firebase-utils';
import { from, Observable } from 'rxjs';
import { db } from '../../firebase';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  getAppointments(): Observable<Appointment[]> {
    return from(fetchCollection<Appointment>(db, 'appointments'));
  }
}
