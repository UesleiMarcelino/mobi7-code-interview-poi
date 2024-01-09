import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LocationDataModel, PoisDataModel } from 'src/app/app.interface';
import { POIService } from 'src/app/poi.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['placa', 'poi', 'data', 'tempo'];
  dataSource = new MatTableDataSource<any>();

  public listCars = new Array<LocationDataModel>();
  public listPois = new Array<PoisDataModel>();
  results: any[] = []


  constructor(private poiService: POIService) { }

  ngOnInit(): void {
    this.listCarsData()
    this.listPoisData()
  }

  public listCarsData(): void {
    this.poiService.getCarData().subscribe({
      next: (e: any) => {
        this.listCars = e
        this.findPOIs()
      },

      error: (e: any) => {
        console.log(e)
      }
    })
  }

  public listPoisData(): void {
    this.poiService.getPoisData().subscribe({
      next: (e: any) => {
        this.listPois = e
        this.findPOIs()
      },

      error: (e: any) => {
        console.log(e)
      }
    })
  }

  public findPOIs() {
    this.listPois.map((poi: any) => {
      this.listCars.map((car: any) => {
        const distance = this.haversineCalculate(
          car.latitude,
          car.longitude,
          poi.latitude,
          poi.longitude
        );
        const raio = poi.raio / 1000
        if (distance <= raio) {
          this.results.push({
            id: car.id, placa: car.placa, nomePoi: poi.nome, tempo: car.data
          })
        }
      })
    })
    this.dataSource = new MatTableDataSource(this.results);

  }

  private haversineCalculate(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const EARTH_RADIUS = 6371.0; // Raio da Terra em km

    const toRad = (value: number) => (value * Math.PI) / 180;

    const dlat = toRad(lat2 - lat1);
    const dlon = toRad(lon2 - lon1);

    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dlon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = EARTH_RADIUS * c;

    return distance;
  }

  public search(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }


}
