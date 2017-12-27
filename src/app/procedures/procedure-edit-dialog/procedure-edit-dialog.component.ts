import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'procedure-edit-dialog',
  templateUrl: './procedure-edit-dialog.component.html',
})
export class ProcedureEditDialogComponent {
  public name: string;

  constructor(public dialogRef: MatDialogRef<ProcedureEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.name;
  }

  public edit(): void {
    this.dialogRef.close({name: this.name});
  }

  public close(): void {
    this.dialogRef.close();
  }
}
