import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BaseLayoutComponent,
    PageNotFoundComponent,
    BannerComponent,
    CategoriesComponent,
    ProductListComponent,
    BlogPageComponent,
    ContactPageComponent,
    DashboardComponent,
    ProductDetailPageComponent,
    SignInComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
