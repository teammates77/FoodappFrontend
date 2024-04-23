import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import { OfferComponent } from './offer/offer.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AboutComponent } from './about/about.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { MerchantRegComponent } from './merchant-reg/merchant-reg.component';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantRestaurantInfoComponent } from './merchant-restaurant-info/merchant-restaurant-info.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { ViewRestaurantItemsComponent } from './view-restaurant-items/view-restaurant-items.component';
import { CartComponent } from './cart/cart.component';
import { UpdateRestaurantItemsComponent } from './update-restaurant-items/update-restaurant-items.component';
import { MerchantHeaderComponent } from './merchant-header/merchant-header.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { MerchantProfileComponent } from './merchant-profile/merchant-profile.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { CommonLoginDashboardComponent } from './common-login-dashboard/common-login-dashboard.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { MerForgotComponent } from './mer-forgot/mer-forgot.component';
import { MerResetComponent } from './mer-reset/mer-reset.component';
import { TeamComponent } from './team/team.component';
import { CustomerOrderDetailsComponent } from './customer-order-details/customer-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    ForgotComponent,
    DashboardComponent,
    LogoutComponent,
    OfferComponent,
    SupportComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    UserProfileComponent,
    ResetPasswordComponent,
    AboutComponent,
    RestaurantMenuComponent,
    CategoryMenuComponent,
    MerchantRegComponent,
    MerchantLoginComponent,
    MerchantDashboardComponent,
    MerchantRestaurantInfoComponent,
    AddItemsComponent,
    ViewRestaurantComponent,
    ViewRestaurantItemsComponent,
    CartComponent,
    UpdateRestaurantItemsComponent,
    MerchantHeaderComponent,
    UpdateRestaurantComponent,
    PaymentgatewayComponent,
    MerchantProfileComponent,
    ViewOrdersComponent,
    CommonLoginDashboardComponent,
    AddressInfoComponent,
    MerForgotComponent,
    MerResetComponent,
    TeamComponent,
    CustomerOrderDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
