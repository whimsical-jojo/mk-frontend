import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  http = inject(HttpClient);

  getAppointments() {
    return this.http.get<Appointment[]>('./data/appointments.json');
  }
}
