import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProceduresService} from './procedures.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Procedure} from '../core/interfaces/Procedure';
import {Dummy} from '../core/Dummy';
import {ProcedureEditDialogComponent} from './procedure-edit-dialog/procedure-edit-dialog.component';
import {ProcedureAddDialogComponent} from './procedure-add-dialog/procedure-add-dialog.component';

@Component({
  selector: 'dash-procedures',
  templateUrl: './procedures.component.html'
})
export class ProceduresComponent implements OnInit, AfterViewInit {
  constructor(private proceduresService: ProceduresService,
              public dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'edit', 'delete'];
  dataSource: MatTableDataSource<Procedure>;
  private procedures: Procedure[] = Dummy.factory(Procedure, 10);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filter(filterValue: string) {
    let filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filter;
  }

  updateTable(): void {
    this.proceduresService.getProcedures().$observable.subscribe( (procedures:Procedure[]) => {
      this.procedures.length = 0;
      this.procedures.push(...procedures);
      this.dataSource._updateChangeSubscription();
    })
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Procedure>(this.procedures);
    this.updateTable();
  }

  addProcedure(){
    this.dialog.open(ProcedureAddDialogComponent, {
      width: '500px'
    }).afterClosed().subscribe(result => {
      if (result && !!result.name) {
        this.proceduresService.create({name: result.name}).$observable
          .subscribe(() => {},() => this.updateTable());
      }
    })
  }

  deleteProcedure(ind: any): void {
    if (window.confirm('Действительно удалить методику?'))
      this.proceduresService.delete({id: ind._id}).$observable.subscribe(() => this.updateTable());
  }

  editProcedure(ind: any): void {
    this.dialog.open(ProcedureEditDialogComponent, {
      width: '500px',
      data: { name: ind.name }
    }).afterClosed().subscribe(result => {
      if (result && !!result.name) {
        this.proceduresService.update({id: ind._id, name: result.name}).$observable
          .subscribe(() => this.updateTable());
      }
    })
  }
}
