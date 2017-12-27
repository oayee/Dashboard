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
  templateUrl: './devices.component.html'
})
export class DevicesComponent implements OnInit, AfterViewInit {
  constructor(private devicesService: DevicesService,
              public userService: UserService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

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

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IDevice>(this.devices);
    this.updateTable();
  }

}
