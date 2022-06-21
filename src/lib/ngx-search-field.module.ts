import { NgModule } from '@angular/core';
import { NgxSearchFieldComponent } from './ngx-search-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NgxSearchFieldComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    NgxSearchFieldComponent
  ]
})
export class NgxSearchFieldModule { }
