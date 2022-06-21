import { NgModule } from '@angular/core';
import { NgxSearchFieldComponent } from './ngx-search-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputFilterPipe } from './input-fitler.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxSearchFieldComponent,
    InputFilterPipe
  ],
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonModule
  ],
  exports: [
    NgxSearchFieldComponent,
    InputFilterPipe
  ]
})
export class NgxSearchFieldModule { }
