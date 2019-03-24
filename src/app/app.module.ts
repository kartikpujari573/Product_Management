import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { ConvertToSpaces } from './shared/convertToSpaces';
import { starComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, 
    ConvertToSpaces,
    starComponent,
    ProductDetailsComponent,
    WelcomeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'products', component : ProductListComponent},
      { path : 'products/:id', component : ProductDetailsComponent},
      { path : 'welcome', component : WelcomeComponent},
      { path : '', redirectTo: 'welcome', pathMatch: 'full'},
      { path : '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
