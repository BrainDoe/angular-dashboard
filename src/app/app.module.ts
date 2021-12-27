import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedInfoComponent } from './components/featured-info/featured-info.component';
import { ChartComponent } from './components/chart/chart.component';
import { WidgetSmallComponent } from './components/widget-small/widget-small.component';
import { WidgetLargeComponent } from './components/widget-large/widget-large.component';
import { ButtonComponent } from './components/widget-large/button/button.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { ProductsComponent } from './pages/productlist/productlist.component';
import { ProductComponent } from './pages/product/product.component';
import { NewproductComponent } from './pages/newproduct/newproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:userId', component: UserComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:productId', component: ProductComponent },
  { path: 'newproduct', component: NewproductComponent },
  { path: '**', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    HomeComponent,
    FeaturedInfoComponent,
    ChartComponent,
    WidgetSmallComponent,
    WidgetLargeComponent,
    ButtonComponent,
    UserListComponent,
    UserComponent,
    NewuserComponent,
    ProductsComponent,
    ProductComponent,
    NewproductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    NgChartsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
