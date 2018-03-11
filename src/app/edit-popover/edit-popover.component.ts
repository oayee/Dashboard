import { Component, OnInit, Input, Optional, Host } from '@angular/core';
import { SatPopover } from "@ncstate/sat-popover"
import 'rxjs/add/operator/filter';
import {stts} from "../devices/statuses"


@Component({
  selector: 'app-edit-popover',
  templateUrl: './edit-popover.component.html',
  styleUrls: ['./edit-popover.component.scss']
})
export class EditPopoverComponent {

  @Input()
  get value(): any {return this._value}
  set value(x: any){this.newValue = JSON.parse(JSON.stringify(x)); this._value = JSON.parse(JSON.stringify(x)) }
  private _value = null;

  @Input()
  name = '';
  @Input()
  type = '';

  prntValue(arg:any) {
    console.log(arg);
  }
  /** Form model for the input. */
  newValue = null;


  statusNames = Object.keys(stts);
  statuses = stts;

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {

    if (this.popover) {
      // subscribe to cancellations and reset form value
      this.popover.closed
        .filter(val => val == null)
        .subscribe(() =>  this.newValue = JSON.parse(JSON.stringify(this.value)) )
      //this.popover.closed.subscribe((emitted) => {console.log(emitted)})
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.newValue);
    }
  }

  onCancel() {
    if (this.popover) {
     this.popover.close(null);
    }
  }
}
