import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseResourceFormComponent } from './components/base-resource-form/base-resource-form.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [BreadCrumbComponent, PageHeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    BreadCrumbComponent,
    PageHeaderComponent,
  ],
})
export class SharedModule {}
