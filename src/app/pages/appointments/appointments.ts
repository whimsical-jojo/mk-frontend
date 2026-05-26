import { Component, inject, input } from '@angular/core';
import { AppointmentService } from '../../services/appointment-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-appointments',
  imports: [],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class Appointments {
  private appointmentService = inject(AppointmentService);

  //I was going to use a separate component for the appointment cards, but it's overkill
  appointments = toSignal(this.appointmentService.getAppointments());
}
