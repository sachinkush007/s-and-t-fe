import { ChangeDetectorRef, Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-hiring',
  standalone: false,
  templateUrl: './hiring.html',
  styleUrl: './hiring.css',
})

export class Hiring {


  isSubmitting = false;
  resumeReady = false;
  formData = {
    fullName: '',
    roleAppliedFor: '',
    phone: '',
    email: '',
    location: '',
    resumeName: '',
    resumeBase64: '',
    details: ''

  };

  private readonly sheetApiUrl =
    'https://script.google.com/macros/s/AKfycbwei5yIv_ILrXFWSVUFgUdp7oMA5_QJFozuQja6dK-GaErewn7D3ZwZVR_JBUoAufz0/exec'
  // 'https://script.google.com/macros/s/AKfycbx6vBZ-OO7eLg2Vhho8TXP-uguZm6almtJTY-DCM5MxZlhz86xWix7suQeEm9mR3mf5pg/exec';

  constructor(private cdr: ChangeDetectorRef) { }

  // async submitForm(): Promise<void> {
  //   this.isSubmitting = true;
  //   this.cdr.detectChanges();

  //   try {
  //     await fetch(this.sheetApiUrl, {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       body: JSON.stringify(this.formData)
  //     });

  //     this.isSubmitting = false;
  //     this.cdr.detectChanges();

  //     const modal = new bootstrap.Modal(
  //       document.getElementById('successModal') as HTMLElement
  //     );
  //     modal.show();

  //     this.formData = {
  //       fullName: '',
  //       roleAppliedFor: '',
  //       phone: '',
  //       email: '',
  //       location: '',
  //       details: '',
  //       resume: null as File | null

  //     };

  //     this.cdr.detectChanges();

  //   } catch (error) {
  //     console.error(error);
  //     this.isSubmitting = false;
  //     this.cdr.detectChanges();
  //     alert('Failed to submit form');
  //   }
  // }

  private readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file) return;

  this.formData.resumeName = file.name;

  const reader = new FileReader();
  reader.onload = () => {
    this.formData.resumeBase64 = reader.result as string;
    this.cdr.detectChanges();
  };
  reader.readAsDataURL(file);
}

async submitForm(): Promise<void> {
  this.isSubmitting = true;
  this.cdr.detectChanges();

  try {
    await fetch(this.sheetApiUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(this.formData)
    });

    this.formData = {
      fullName: '',
      roleAppliedFor: '',
      phone: '',
      email: '',
      location: '',
      details: '',
      resumeName: '',
      resumeBase64: ''
    };

    this.isSubmitting = false;
    this.cdr.detectChanges();

    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    const modalEl = document.getElementById('successModal') as HTMLElement;
    bootstrap.Modal.getOrCreateInstance(modalEl).show();

    this.cdr.detectChanges();

  } catch (error) {
    console.error(error);
    this.isSubmitting = false;
    this.cdr.detectChanges();
    alert('Failed to submit form');
  }
}
}