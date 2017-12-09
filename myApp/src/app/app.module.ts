import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({
  declarations: [//只能声明组件、指令�, NavbarComponent�, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent管道
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule//需要正常运转还需要什么
  ],
  providers: [],//模块中提供了什么服务
  bootstrap: [AppComponent]//声明了模块的主组件
})
export class AppModule { }
