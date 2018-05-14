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

  resturants = [];
  searchParam: string = '';
  
  ngOnInit() {
  }

  onSubmit(e) {
    event.preventDefault();
    this.resturants = [];
    this.http.get(environment.googlePlaces.urlBase + this.searchParam + environment.googlePlaces.key)
      .subscribe(
      res => {
        res.results.forEach(e => {
          var resturant = {
            name: e.name,
            rating: e.rating,
            address: e.vicinity
          }
          this.resturants.push(resturant)
          console.log(resturant)
        });
      }
      );

  }

}
