import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../core/user-service/User';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Dummy} from '../core/Dummy';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;

displayedColumns: string[] = ['surname', 'name', 'lastname', 'role'];
  dataSource: MatTableDataSource<User>;
  private users: User[] = Dummy.factory(User, 10);

  constructor(private usersService: UsersService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updateTable(): void {
    this.usersService.getUsers().$observable.subscribe( (users:User[]) => {
      this.users.length = 0;
      this.users.push(...users);
      this.dataSource._updateChangeSubscription();
    })
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.updateTable();
  }

}
