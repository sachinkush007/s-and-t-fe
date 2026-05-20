import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-hiring',
  standalone: false,
  templateUrl: './hiring.html',
  styleUrl: './hiring.css',
})
export class Hiring {

  isSubmitting = false;

  formData = {
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: '',
    expectedHiringCount: '',
    location: '',
    details: ''
  };

  private readonly sheetApiUrl = 'https://script.google.com/macros/s/AKfycbx6vBZ-OO7eLg2Vhho8TXP-uguZm6almtJTY-DCM5MxZlhz86xWix7suQeEm9mR3mf5pg/exec';

 async submitForm(): Promise<void> {
  this.isSubmitting = true;

  try {
    const response = await fetch(this.sheetApiUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(this.formData)
    });

    this.isSubmitting = false;

    const modal = new bootstrap.Modal(
      document.getElementById('successModal') as HTMLElement
    );
    modal.show();

    this.formData = {
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      service: '',
      expectedHiringCount: '',
      location: '',
      details: ''
    };

  } catch (error) {
    console.error(error);
    this.isSubmitting = false;
    alert('Failed to submit form');
  }
}
}
