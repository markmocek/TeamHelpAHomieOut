import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private http: HttpClient) {}

  restaurants = Array<Restaurant>();
  searchParam: string = '';
  
  ngOnInit() {
  }

  onSubmit(e) {
    event.preventDefault();
    this.restaurants = [];
    this.http.get(environment.googlePlaces.urlBase + this.searchParam + environment.googlePlaces.key)
    .subscribe((res: GoogleAPI) => this.restaurants = res.results);

  }

}

interface Restaurant {
  name: string,
  rating: number,
  vicinity: string
}

interface GoogleAPI {
  results: Array<Restaurant>
}
