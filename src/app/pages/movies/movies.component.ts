import { Component, OnInit } from '@angular/core';
import { StarWarsModel } from 'src/app/models/star-wars.model';
import { DataStarWarsService } from 'src/app/services/data-star-wars.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  films: StarWarsModel[] = [];
  displayedColumns = ['title', 'director', 'producer', 'release_date'];

  constructor (
      private starWarsService: DataStarWarsService
    ) { }
  
    ngOnInit(): void {
      this.starWarsService.read().subscribe((films: any) => {
        this.films = films;
    })
  }
}

