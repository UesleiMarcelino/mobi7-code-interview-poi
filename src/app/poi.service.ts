// poi.service.ts
import { Injectable } from '@angular/core';
import { LocationDataModel, PoisDataModel } from './app.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class POIService {
  private urlLocData: string = 'https://challenge-backend.mobi7.io/posicao/'
  private urlPois: string = 'https://challenge-backend.mobi7.io/pois/'

  // private urlLocData: string = 'http://localhost:3000/posicao'
  // private urlPois: string = 'http://localhost:3000/pois'

  constructor(private http: HttpClient) { }


  getCarData(): Observable<LocationDataModel[]> {
    return this.http.get<LocationDataModel[]>(`${this.urlLocData}`);
  }

  getPoisData(): Observable<PoisDataModel[]> {
    return this.http.get<PoisDataModel[]>(`${this.urlPois}`);
  }
}
