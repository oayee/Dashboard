import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Status } from './Status';
import { IElement } from './IElement';

@Component({
  selector: 'dash-main-table',
  templateUrl: './main-table.component.html'
})
export class MainTableComponent {
  displayedColumns = ['svidNumber', 'siOwner', 'productionDate', 'status'];
  dataSource = new MatTableDataSource<IElement>(ELEMENT_DATA);

  filterOptions: string;
  statuses: Status[] = [Status.pending, Status.accepted, Status.processing, Status.processed, Status.released];

  filter(filterValue: string) {
    let filter = this.filterOptions + filterValue.trim().toLowerCase();
    this.dataSource.filter = filter;
  }

  setFilterOptions(status: string) {
    this.filterOptions = status;
    this.filter('');
  }
}

const ELEMENT_DATA: IElement[] = [
  // {svidNumber: 1, povDate: new Date(2017, 7, 15), siOwner: 'Рога и Копыта', siName: 'комплект', siType: 'КТСП-Т',
  //   siModel: '', siSerialNum: '5374r/x', needsProtocol: 1, temperature: 25, humidity: 58, pressure: 99.0,
  //   siRegNum: '25751', povInterval: 4, productionDate: 2005, povMethod: 'метод', comment: 'коммент',
  //   status: Status.accepted},
  {svidNumber: 1, siOwner: 'Рога и Копыта', productionDate: 2005, status: Status.accepted},
  {svidNumber: 2, siOwner: 'Рога и Копыта', productionDate: 2005, status: Status.pending},
  {svidNumber: 3, siOwner: 'Рога и Копыта', productionDate: 2006, status: Status.processed},
  {svidNumber: 4, siOwner: 'Рога и Копыта', productionDate: 2006, status: Status.processing}
];
