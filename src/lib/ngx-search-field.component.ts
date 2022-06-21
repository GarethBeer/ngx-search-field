import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'lib-ngx-search-field',
  template: `
    <form>
      <mat-form-field [appearance]="appearance">
        <mat-label>{{ fieldLabel }}</mat-label>
        <input matInput [matAutocomplete]="auto" [formControl]="inputControl" />
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option
            *ngFor="
              let item of arr | inputFilterPipe: inputControl.value;
              let i = index
            "
            [value]="fieldToDisplay ? item[fieldToDisplay] : item"
            (click)="submitValueFunc(item)"
            >{{ fieldToDisplay ? item[fieldToDisplay] : item }}
          </mat-option>
        </mat-autocomplete>
        <mat-icon
          matSuffix
          *ngIf="inputControl.value"
          color="primary"
          (click)="clearControl()"
          >cancel</mat-icon
        >
        <mat-icon
          matSuffix
          *ngIf="!inputControl.value"
          color="primary"
          >search</mat-icon
        >
      </mat-form-field>
    </form>
  `,
  styles: ['form { width:100%; padding:0.5rem} .mat-icon:hover {curser:pointer}'],
})
export class NgxSearchFieldComponent implements OnDestroy {
  // inputs
  @Input() arr: any[] = [];
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() fieldLabel: string = 'Search';
  @Input() fieldToDisplay: string = '';

  // outputs
  @Output() submitValue: EventEmitter<any> = new EventEmitter();

  // component state
  inputControl: FormControl = new FormControl('');
  inputSubscription: Subscription;

  constructor() {
    this.inputSubscription = this.inputControl.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((input: string) => {
        if (!input) {
          this.submitValue.emit(null);
        }
      });
  }

  submitValueFunc = (value: any) => {
    this.submitValue.emit(value)
  }

  clearControl = () => {
    this.inputControl.setValue('');
    this.submitValue.emit(null)
  }

  ngOnDestroy(): void {
    this.inputSubscription?.unsubscribe();
  }
}
