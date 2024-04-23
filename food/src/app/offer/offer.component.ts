import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  offers = [
    {
      title: 'Raajbagh Restaurant',
      description: 'Get upto 50% off all items. Use code FOOD50.',
      validUntil: '2024-03-31',
      image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/5/23/indian-thali.jpg'
    },

    {
      title: 'JR Jana Veg Restaurant',
      description: 'Get upto 40% off all items. Use code VEG40.',
      validUntil: '2024-03-31',
      image: 'https://media5.newsnationtv.com/images/2016/09/16/160908727-food.jpg'
    },
    
    {
      title: 'Sweets, Snacks, Medavakkam',
      description: 'Get upto 30% off all items. Use code SWEETS30.',
      validUntil: '2024-03-31',
      image: 'https://www.vikhrolicucina.com/uploads/stories/1662465216_groupindianassortedsweetsmithaiwithdiya.jpg'
    },
    
    {
      title: 'Dominos Pizza',
      description: 'Get upto 50% off all items. Use code PIZZA50.',
      validUntil: '2024-03-31',
      image: 'https://dkuk.org/wp-content/uploads/Dominoes-x-houston.jpg'
    },
    
    {
      title: 'KFC',
      description: 'Get upto 45% off all items. Use code KFC45.',
      validUntil: '2024-03-31',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg'
    },
    
    {
      title: 'Hyderabadi Bhai Biryani',
      description: 'Get upto 35% off ON ALL biryanis. Use code BIRYANI35.',
      validUntil: '2024-03-31',
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/van4lpz1epfq1zpxd09l'
    },
    
    {
      title: '28 Spice Club',
      description: 'Get upto 50% off all items. Use code SPICE50.',
      validUntil: '2024-03-31',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/49/e4/01/most-authentic-indian.jpg'
    },
    
    {
      title: 'The Kitchen Story',
      description: 'Get 30% off upto Rs75. Use code KTC30.',
      validUntil: '2024-03-31',
      image: 'https://yt3.googleusercontent.com/ytc/AIdro_k1t3P57hFIRIz2pVxFYesapYc93AuPS4F3oWjl=s900-c-k-c0x00ffffff-no-rj'
    },


    {
      title: 'Coffe Cafe',
      description: 'Get upto 35% off all items. Use code COFFEE35.',
      validUntil: '2024-03-31',
      image: 'https://b.zmtcdn.com/data/collections/174bba4eff351eb4ebb5a28044d6e801_1689766713.png'
    },



  ];
}
