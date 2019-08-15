import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NewServiceService } from './new-service.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyNewComponent } from './my-new/my-new.component';
import { DateComponent } from './date/date.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PriceComponent } from './price/price.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DistrictComponent } from './district/district.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'price', component: PriceComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'date', component: DateComponent },
  { path: '**', component: NotFoundComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    MyNewComponent,
    DateComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PriceComponent,
    NotFoundComponent,
    DistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],

  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
