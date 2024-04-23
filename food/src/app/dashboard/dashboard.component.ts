import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../Services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { Category} from '../models/category'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  categoryUrl:string;
  categoryId: number;
  topRestaurants: any[] = [];
  itemsByCategory: any[] = [];
  itemsByRestaurant: any[] = [];
  allRestaurants: Restaurant[] = []; 

  constructor(public router: Router, private searchservice: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllRestaurants();
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.viewAllCategory();
    });
  }

  viewAllCategory(): void {
    this.searchservice.viewAllCategory().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }


  getAllRestaurants(): void {
    this.searchservice.getAllRestaurants().subscribe(
      (data: Restaurant[]) => {
        this.allRestaurants = data;
        // this.storeRestaurantIdsInSessionStorage();
      },
      (error) => {
        console.error('Error fetching all restaurants:', error);
      }
    );
  }
  
  // storeRestaurantIdsInSessionStorage(): void {
  //   const restaurantIds: number[] = this.allRestaurants.map(restaurant => restaurant.restaurantId);
  //   sessionStorage.setItem('restaurantIds', JSON.stringify(restaurantIds));
  // }

  
}
