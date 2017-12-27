import {MatDialogRef} from '@angular/material';
import {Component} from '@angular/core';
@Component({
  selector: 'procedure-add-dialog',
  templateUrl: './procedure-add-dialog.component.html',
})

export class ProcedureAddDialogComponent {
  public name: string;

  constructor(public dialogRef: MatDialogRef<ProcedureAddDialogComponent>) {}

  public add(): void {
    this.dialogRef.close({name: this.name});
  }

  public close(): void {
    this.dialogRef.close();
  }
}
