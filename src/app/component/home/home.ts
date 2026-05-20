import { Component } from '@angular/core';

declare var Razorpay: any;

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

   // Replace this with your Razorpay Key ID from the dashboard
  private readonly razorpayKeyId = 'rzp_test_SoMQLqJoAUnpV9';

  payNow(type: 'admission' | 'job'): void {
    const amount = type === 'admission' ? 49900 : 59900; // in paise
    const description =
      type === 'admission'
        ? 'Admission Payment'
        : 'Job Payment';

    const options = {
      key: this.razorpayKeyId,
      amount: amount,
      currency: 'INR',
      name: 'S&T Jobs & Admissions',
      description: description,
      image: 'assets/st2.png',
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#0f2a57'
      },
      handler: (response: any) => {
        console.log('Payment Success:', response);

        alert(
          'Payment successful!\nPayment ID: ' + response.razorpay_payment_id
        );

        // Here you can send response.razorpay_payment_id to backend
        // for verification and order confirmation.
      },
      modal: {
        ondismiss: () => {
          console.log('Payment popup closed');
        }
      }
    };

    if (typeof Razorpay === 'undefined') {
      alert('Razorpay SDK is not loaded. Please add checkout.js in index.html');
      return;
    }

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
