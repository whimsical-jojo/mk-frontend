import { Component, computed, inject, input } from '@angular/core';
import { AppointmentService } from '../../services/appointment-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { AppointmentCard } from "../../components/appointment-card/appointment-card";

@Component({
  selector: 'app-appointments',
  imports: [AppointmentCard],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class Appointments {
  private appointmentService = inject(AppointmentService);
  private _appointments = toSignal(this.appointmentService.getAppointments(), { initialValue: [] });

  //Yeah yeah I could probably do this with less duplicated code but I am feeling lazy
  futureAppointments = computed(() => {
    const now = new Date();
    return this._appointments().filter(appointment => new Date(appointment.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  });
  
  pastAppointments = computed(() => {
    const now = new Date();
    return this._appointments().filter(appointment => new Date(appointment.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });
}
