import { DatePipe, registerLocaleData } from '@angular/common';
import { Component, input } from '@angular/core';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-appointment-card',
  imports: [DatePipe],
  templateUrl: './appointment-card.html',
  styleUrl: './appointment-card.css',
})
export class AppointmentCard {
  appointment = input.required<Appointment>();
}
