import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {IDevice} from '../core/interfaces/IDevice';
import {columns} from './table-columns';
import {DevicesService} from './devices.service';
import {Dummy} from '../core/Dummy';
import { status } from './statuses';
import {UserService} from '../core/user-service/user.service';


@Component({
  selector: 'devices',
  styleUrls: ['./devices.component.css'],
  templateUrl: './devices.component.html'
})
export class DevicesComponent implements OnInit, AfterViewInit {
  constructor(private devicesService: DevicesService,
              public userService: UserService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  editRowBuffer : { idx: number; data: IDevice } = {idx: null, data: null};
  statuses: status[] = [status.pending, status.accepted, status.processing, status.processed, status.released];
  displayedColumns: string[] = columns;
  dataSource: MatTableDataSource<IDevice>;
  private devices: IDevice[] = Dummy.factory(IDevice, 10);



  filterOptions: string = '';
  filterString: string = '';

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filter(filterValue: string, f?: string) {
    this.filterString = this.filterOptions + filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterString;
  }

  setFilterOptions(status: string) {
    console.log(status);
    this.filterOptions = status;
    this.filter('', null);
  }

  updateTable(): void {
    this.devicesService.getDevices().$observable.subscribe( (devices:IDevice[]) => {
      this.devices.length = 0;
      this.devices.push(...devices);
      this.dataSource._updateChangeSubscription();
    })
  }

  deleteRow(idx: number): void {
    //TODO: delete row from DB

    this.dataSource.data.splice(idx, 1);
    this.dataSource._updateChangeSubscription();
  }

  createRow(): void {
    if (this.editRowBuffer.idx !== null){
      if (!this.cancelEdit()){
        return;
      }
    }
    this.editRowBuffer = { idx: null, data: null};
    this.dataSource.data.unshift(new IDevice());
    this.dataSource._updateChangeSubscription();
    this.editRowBuffer.idx = 0;
  }

  test(...args: any[]): void {
    for (var arg of args) {
      console.log(arg);
    }
  }

  editRow(row: IDevice, idx: number): void {
    // console.log(idx);
    // console.log(row);
    if (this.editRowBuffer.idx !== null){
      if (!this.cancelEdit()){
        return;
      }
      if ( this.editRowBuffer.data === null){ //if data === null, the editable row was new and was deleted on cancedEdit()
        idx--;                                //adjust idx for the deleted row
      }
    }
    this.editRowBuffer.idx = idx;
    this.editRowBuffer.data = row;
  }

  applyEdit(): void {
    //TODO: save row changes to DB

    this.editRowBuffer = { idx: null, data: null};
  }

  open(p: any): void {
    p.open();
  }

  cancelEdit(): boolean {
    if (confirm("Отменить изменеия?")){
      if (this.editRowBuffer.data === null){    //if true, the editable row was newly added and needs to be deleted
        this.deleteRow(this.editRowBuffer.idx);
      }else{                                    //else revert changes
        this.dataSource.data[this.editRowBuffer.idx] = this.editRowBuffer.data;
        this.dataSource._updateChangeSubscription();
      }
      this.editRowBuffer.idx = null;
      return true;
    }
    return false;
  }



  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IDevice>(this.devices);
    this.updateTable();
  }

}
