import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { MkclComponent } from './mkcl/mkcl.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    MkclComponent,
    FooterComponent,
    InfoComponent,
    ContactComponent,
    SlideComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
