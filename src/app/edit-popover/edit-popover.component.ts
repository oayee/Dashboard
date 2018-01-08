import { Component, OnInit, Input, Optional, Host } from '@angular/core';
import { SatPopover } from "@ncstate/sat-popover"
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-edit-popover',
  templateUrl: './edit-popover.component.html',
  styleUrls: ['./edit-popover.component.scss']
})
export class EditPopoverComponent {

  @Input()
  get value(): string {return this._value}
  set value(x: string){this.newValue = this._value = x}
  private _value = '';

  /** Form model for the input. */
  newValue = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
    if (this.popover) {
      // subscribe to cancellations and reset form value
      this.popover.closed
        .filter(val => val == null)
        .subscribe(() =>  this.newValue = this.value )
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
     this.popover.close();
    }
  }
}
