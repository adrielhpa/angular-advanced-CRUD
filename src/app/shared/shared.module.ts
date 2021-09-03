import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseResourceFormComponent } from './components/base-resource-form/base-resource-form/base-resource-form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
