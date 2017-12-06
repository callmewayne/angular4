import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [//只能声明组件、指令和管道
    AppComponent//组件
  ],
  imports: [
    BrowserModule//需要正常运转还需要什么
  ],
  providers: [],//模块中提供了什么服务
  bootstrap: [AppComponent]//声明了模块的主组件
})
export class AppModule { }
