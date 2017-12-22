import { Component } from '@nestjs/common';
import {IDog} from './interfaces/dog.interface';

@Component()
export class DogsService {
  private readonly dogs: IDog[] = [
    {
      name: 'dog1',
      age: 21,
      breed: 'asd'
    },
    {
      name: 'dog2',
      age: 22,
      breed: 'dsa'
    }
  ];

  create(dog: IDog) {
    this.dogs.push(dog);
  }

  findAll(): IDog[] {
    return this.dogs;
  }
}
