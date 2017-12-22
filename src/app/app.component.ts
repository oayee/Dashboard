import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {CatsService} from "./cats.service";

class Dog {
  name: string;
  age: number;
  breed: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private appService: AppService,
              private catsService: CatsService) {}

  ngOnInit(): void {
  //   this.catsService.setCats({
  //     name: 'cot s fronta',
  //     age: 23,
  //     breed: 'azaza'
  //   });
  // }
}
