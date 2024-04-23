import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item } from '../models/item.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export class NewItem implements Item {
  itemId: number;
  itemName: string;
  description: string;
  itemimageUrl: string;
  category: {
    categoryId: number;
    categoryName: string;
  };
  cost: number;
}

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
  itemForm: FormGroup;
  newItem: NewItem = new NewItem();

  constructor(private fb: FormBuilder, private itemService: ItemService, private router: Router) {
    this.itemForm = this.fb.group({
      itemName: ['', Validators.required,],
      description: ['', Validators.required,  ],
      itemimageUrl: ['', Validators.required],
      categoryId: ['', Validators.required,],
      // restaurantId: ['', Validators.required],
      cost: ['', Validators.required,]
    });
  }

  ngOnInit(): void {
  }

  addItem(): void {
    if (this.itemForm.valid) {
      const restaurantDataString = sessionStorage.getItem('restaurantData');
      if (restaurantDataString) {
        const restaurantData = JSON.parse(restaurantDataString);
        const restaurantId = restaurantData.restaurantId;
        this.newItem = this.itemForm.value;
        this.itemService.addItemToRestaurant(this.newItem, restaurantId).subscribe({
          next: (response) => {
            console.log('Item added successfully:', response);
            Swal.fire('Success', 'Item added successfully', 'success');
            this.router.navigate(['/view-restaurant-items']);
          },
          error: (error) => {
            console.error('Error adding item:', error);
            Swal.fire('Error', 'Failed to add item', 'error');
          }
        });
      } else {
        console.error('Restaurant data not found in session storage');
        Swal.fire('Error', 'Restaurant data not found', 'error');
      }
    } else {
      this.itemForm.markAllAsTouched();
    }
  }
}