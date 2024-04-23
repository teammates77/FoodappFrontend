import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // selectedCategory: string | null = null;
 
  // categories = [
  //   { name: 'Help with orders', route: 'orders' },
  //   { name: 'FAQs', route: 'faqs' },
  // ];
 
  // selectCategory(category: string): void {
  //   this.selectedCategory = category;
  // }
// help-support.component.ts
 

  selectedCategory: string | null = null;

  selectedQuestion: string | null = null;
 
  categories = [

    { name: 'Help with orders', route: 'orders' },
    { name: 'FAQs', route: 'FAQs' }

  ];
 
  questions = {

    'orders': ['I am unable to place a cash on delivery order', 'I am unable to find the restaurant I am looking for'],
    'FAQs': ['Can I edit my order?', 'Is there a minimum order value?', 'Deactivate my account']

  };
 
  questionDescriptions = {

    'orders': {
      'I am unable to place a cash on delivery order': 'COD option may not be available due to below reasons: - High value order - If order is placed from a desktop application - Any recent history of cancelling a COD order',
      'I am unable to find the restaurant I am looking for': 'The restaurant might either be closed at the moment or temporarily not serviceable due to the low rider availability near the restaurant. Please try again after some time or consider ordering from a different restauraunt.',
    },

    'FAQs': {

      'Can I edit my order?': 'In order to edit your order, please click on "Help" and then "I wantto modify items in my order". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started.',

      'Is there a minimum order value?': 'We have no minimum order value and you can order for any amount. ',

      'Deactivate my account': 'Please write to us at support@foodfun.in in the event that you want to deactivate your account.'

    }

  };
 
  selectCategory(category: string): void {

    this.selectedCategory = category;

    this.selectedQuestion = null; // Reset selected question when category changes

  }
 
  selectQuestion(question: string): void {

    this.selectedQuestion = question;

  }

}


