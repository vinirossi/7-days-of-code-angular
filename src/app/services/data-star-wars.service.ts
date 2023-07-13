import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { StarWarsModel } from '../models/star-wars.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStarWarsService {

  private baseUrl = 'http://localhost:3001/results';
  
  constructor(
    private http: HttpClient
    ) { }
  
  read(): Observable<StarWarsModel[]> {
    return this.http.get<StarWarsModel[]>(this.baseUrl)
  }

}
