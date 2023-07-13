import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component'
import { SpaceshipsComponent } from './pages/spaceships/spaceships.component';


import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainComponent } from './core/components/main/main.component';
import { DataStarWarsService } from './services/data-star-wars.service';

import { TranslateTitlePipe } from './shared/translate-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    SpaceshipsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TranslateTitlePipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    DataStarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
