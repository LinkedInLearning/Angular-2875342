import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { ErrorMetadataService } from './services/error-metadata.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: ErrorMetadataService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
