import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MerchantRestaurantService } from '../merchant-restaurant.service'; 
import { ItemService } from '../item.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UpdateItems } from '../models/UpdateItems';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-restaurant-items',
  templateUrl: './update-restaurant-items.component.html',
  styleUrls: ['./update-restaurant-items.component.scss']
})
export class UpdateRestaurantItemsComponent implements OnInit {
  itemForm: FormGroup;
  itemId: number;
  item: any;

  constructor(
    private fb: FormBuilder,
    private merchantRestaurantService: MerchantRestaurantService,
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute 
  ) { }
  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
        console.log('Route Params:', params); // Log route parameters
        this.itemId = +params['itemId'];
        if ( !this.itemId) {
            console.error('Item ID not found in route parameters');
            return;
        }
        this.getItemDetails();
    });
}

  initForm(): void {
    this.itemForm = this.fb.group({
      itemName: ['', Validators.required],
      description: ['', Validators.required],
      itemimageUrl: ['', Validators.required],
      categoryId: ['', Validators.required],
      cost: ['', Validators.required],
    });
  }

  getItemDetails(): void {
    this.itemService.getItemById(this.itemId).subscribe({
      next: (item: any) => {
        this.item = item; 
        this.itemForm.patchValue({
          itemName: item.itemName,
          description: item.description,
          itemimageUrl: item.itemimageUrl,
          categoryId: item.categoryId,
          cost: item.cost
        });
      },
      error: (error) => {
        console.error('Error fetching item details:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch item details. Please try again later.'
        });
      }
    });
  }

  updateRestaurantItems(): void {
    if (!this.itemForm.valid) {
        console.error('Form is invalid');
        return;
    }

    const formData = this.itemForm.value;

    const updatedItem = {
        itemId: this.itemId, 
        itemName: formData.itemName,
        description: formData.description,
        categoryId: formData.categoryId,
        cost: formData.cost,
        restaurantId: parseInt(JSON.parse(sessionStorage.getItem('restaurantData')).restaurantId),
        itemimageUrl: formData.itemimageUrl
    };

    this.merchantRestaurantService.updateRestaurantItems(updatedItem).subscribe({
        next: (data: any) => {
            console.log('Item updated successfully:', data);
            Swal.fire({
                icon: 'success',
                title: 'Item Updated',
                text: 'Restaurant item has been updated successfully.'
            });
        },
        error: (error) => {
            console.error('Error updating item:', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'An error occurred while updating restaurant item. Please try again later.'
            });
        }
    });

}


  onCancel(): void {
    this.router.navigate(['/merchant-dashboard']);
  }

}
