import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms/src/directives/ng_control';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ElementRef } from '@angular/core';


class DateRange {
  constructor(public fromDate: Date, public toDate: Date) {

  }
}

@Component({
  selector: 'date-range-input',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: DateRangeComponent }],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class DateRangeComponent implements MatFormFieldControl<DateRange> {

  parts: FormGroup
  stateChanges = new Subject<void>();

  static nextId = 0;

  id = `date-range-input-${DateRangeComponent.nextId++}`;

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  ngControl: NgControl = null;
  focused = false;

  @Input()
  get value(): DateRange | null {
    let n = this.parts.value;
    if (n.fromDate && n.toDate) {
      return new DateRange(n.fromDate, n.toDate);
    }

    return null;
  }

  set value(dateRange: DateRange | null) {
    dateRange = dateRange || new DateRange(new Date(), new Date());
    this.parts.setValue({ fromDate: dateRange.fromDate, toDate: dateRange.toDate });
    this.stateChanges.next();
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  private _placeholder: string;

  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef) {
    this.parts = fb.group({
      'fromDate': null,
      'toDate': null
    });

    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  get empty() {
    let n = this.parts.value;
    return !n.fromDate && !n.toDate;
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = req;
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = dis;
    this.stateChanges.next();
  }
  private _disabled = false;

  errorState = false;

  controlType = 'date-range-input';

  describedBy = '';

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

}
