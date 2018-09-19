
import { NgModule } from '@angular/core';
import { JsonService } from './json.service';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      HttpModule
   ],
   providers: [
      JsonService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
