import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProceduresService} from './procedures.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Procedure} from '../core/interfaces/Procedure';
import {Dummy} from '../core/Dummy';
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'dash-procedures',
  templateUrl: './procedures.component.html'
})
export class ProceduresComponent implements OnInit, AfterViewInit {
  constructor(private proceduresService: ProceduresService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['select', 'name'];
  dataSource: MatTableDataSource<Procedure>;
  private procedures: Procedure[] = Dummy.factory(Procedure, 10);

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<Procedure>(this.allowMultiSelect, this.initialSelection);

  row;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

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

  select(row){
    this.row = row;
    console.log(row);
  }

  update(){
    this.proceduresService.update({_id: this.row._id, name: "oaye"}).$observable.subscribe(() => this.updateTable());
  }

  delete(){
    console.log(this.row._id);
    this.proceduresService.delete({id: this.row._id}).$observable.subscribe(() => this.updateTable());;
  }
  add(){
    this.proceduresService.create({name: "oaye1"}).$observable.subscribe(() => this.updateTable());;
  }
}
