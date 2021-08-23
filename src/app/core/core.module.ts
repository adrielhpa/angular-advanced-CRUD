import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryDatabase } from '../in-memory-database';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
})
export class CoreModule {}
