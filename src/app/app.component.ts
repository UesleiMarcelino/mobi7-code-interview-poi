// app.component.ts
import { Component, OnInit } from '@angular/core';
import { POIService } from './poi.service';
import { LocationDataModel, PoisDataModel, ResultsModel } from './app.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {


  }


}

