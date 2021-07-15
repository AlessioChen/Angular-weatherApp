import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {

  @Input() items: City[] | null = [];
  @Output() itemClick = new EventEmitter<City | null>();


  input = new FormControl();
  search$ = this.input.valueChanges.pipe(debounceTime(1000));

  constructor() { }

  ngOnInit(): void {
  }

}
