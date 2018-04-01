import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range/date-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, 
        MatInputModule, 
        MatSelectModule, 
        MatCheckboxModule, 
        MatSelect, 
        MatOptionModule, 
        MatFormField, 
        MatCard, 
        MatIconModule, 
        MatOption,
        MatButtonModule,
        MatButton,
        MatCheckbox,
        MatSelectionList,
        MatListOption,
        MatListModule,
        MatCardContent,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatInput,
        MatSuffix,
        MatCardTitle,
        MatCardHeader,
        MatCardSubtitle,
        MatSnackBar,
        MatSnackBarModule
         } from '@angular/material'
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatOptionModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule
  ],
  declarations: [DateRangeComponent],
  exports: [DateRangeComponent, MatSelect, MatSuffix, MatDatepicker, MatInput, MatDatepickerInput, MatDatepickerToggle, MatFormField, MatCard, MatCardContent, MatCardTitle, MatCardHeader, MatCardSubtitle, MatOption, MatButton, MatCheckbox, MatSelectionList, MatListOption]
})
export class SharedModule { }
