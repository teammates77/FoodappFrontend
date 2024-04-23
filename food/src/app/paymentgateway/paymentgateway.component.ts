import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../Services/payment.service';
import { ActivatedRoute,Router } from '@angular/router';
import { OrderRequest } from '../models/payment';
import { OrderDetailsService } from '../Services/order-details.service';
import { CartService } from '../cart/cart.service';
declare var Razorpay: any;


@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.scss']
})
export class PaymentgatewayComponent {
  form: OrderRequest = {
    customerName: '',
    email: '',
    phoneNumber: '', 
    amount: null
  };
  title = 'demo';
  totalAmount: number; // Change to number type
 addressId:number;
razorpayOrderId:String;
  error: string;

  options = {
    "key": "",
    "amount": 0, 
    "name": "Foodfunapp",
    "description": "OnlineFoodDelivery",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVHDyOq-G2nM1sQVk5ICoR84Fsmd_MTzwAF1rhEg7lEdovP8Wryzw8apfmH0oH3M5EAI&usqp=CAU",
    "order_id": "",
    "handler": (response) => {
      var event = new CustomEvent("payment.success", {
        detail: response,
        bubbles: true,
        cancelable: true
      });
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": "",
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  constructor(private http: HttpClient,
    private paymentService: PaymentService, 
    private route: ActivatedRoute,
    private orderDetailsService: OrderDetailsService, 
    private cartService: CartService,
    private router: Router,) {}

  ngOnInit() {
    const totalAmountString = sessionStorage.getItem('totalAmount');
    if (totalAmountString) {
      this.totalAmount = JSON.parse(totalAmountString);
    }
  }


  onSubmit(): void {
    const userDataString = sessionStorage.getItem('userId');
    if (!userDataString) {
        console.error('userData not found in session storage');
        return;
    }

    const userData = JSON.parse(userDataString);
    const userId = userData.userId;

    if (!userId) {
        console.error('Invalid userId:', userId);
        return;
    }

    // Assign totalAmount to form.amount
    this.form.amount = this.totalAmount;

    const orderData = {
        customerName: this.form.customerName,
        email: this.form.email,
        phoneNumber: this.form.phoneNumber,
        amount: this.totalAmount,
        userId: userId
    };

    this.paymentService.createOrder(orderData).subscribe(
        data => {
            console.log('Order created:', data);
            this.options.key = data.secretId;
            this.options.order_id = data.razorpayOrderId;
            this.options.amount = data.totalPayment;
            this.options.prefill.name = '';
            this.options.prefill.email = ''; 
            this.options.prefill.contact = '';

            const rzp = new Razorpay(this.options);
            rzp.open();

            rzp.on('payment.failed', (response) => {
                console.log(response);
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
                this.error = response.error.reason;
            });
        },
        error => {
            console.error('Error creating order:', error);
            this.error = error.error.message; 
        }
    );
}

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event): void {
    console.log(event.detail);
    const paymentResponse = event.detail;
  
    const addressId = sessionStorage.getItem('AddressId');
    if (!addressId) {
      console.error('AddressId not found in session storage');
      return;
    }
  
    const userDataString = sessionStorage.getItem('userId');
    if (!userDataString) {
      console.error('userData not found in session storage');
      return;
    }
    const foodCartId = JSON.parse(userDataString).foodCartId;
    if (!foodCartId) {
      console.error('foodCartId not found in session storage');
      return;
    }
  
    const razorpayOrderId = paymentResponse.razorpay_order_id;
  
    this.addOrder(foodCartId, +addressId, razorpayOrderId);
  }
  
  private addOrder(foodCartId: number, addressId: number, razorpayOrderId: string): void {
    const userDataString = sessionStorage.getItem('userId');
    if (!userDataString) {
      console.error('userData not found in session storage');
      return;
    }
  
    this.orderDetailsService.addOrder(foodCartId, addressId, razorpayOrderId).subscribe(
      (response) => {
        console.log('Order added successfully:', response);
        this.clearCart(foodCartId);
        this.navigateToCustomerOrderDetails();
      },
      (error) => {
        console.error('Error adding order:', error);
      }
    );
  }
  private clearCart(cartId: number): void {
    this.cartService.clearCart(cartId).subscribe(
      (response) => {
        console.log('Cart cleared successfully:', response);
      },
      (error) => {
        console.error('Error clearing cart:', error);
      }
    );
  }
  private navigateToCustomerOrderDetails(): void {
    this.router.navigate(['/customer-order-details']); 
  }
}
