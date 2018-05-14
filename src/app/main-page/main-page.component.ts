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

  resturants = <Object>[];

  ngOnInit() {
  }

  onSubmit(e) {
    event.preventDefault();

    this.http.get(environment.googlePlaces.urlBase + 'pizza' + environment.googlePlaces.key).subscribe(
      res => {
        console.log('HERE IS RETURNED CALL: ' + res);
        this.resturants = res;
      }
    );

  }

}
