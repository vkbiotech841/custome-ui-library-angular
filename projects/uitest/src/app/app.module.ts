
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ONE WAY:
// This is a correct way to import as file. if you save any changes need to re-build the application everytime. otherwise, changes will not be reflected.
// import { FontsModule } from 'ui';


// ANOTHER WAY: HACK
// Import the module that you wish to currently working to chages component. So, need not to rebuild all the time.

import { FontsModule } from 'projects/ui/src/lib/fonts/fonts.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
