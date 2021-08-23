import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
