import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private http: HttpClient) {}

  //  resturants = [];

  ngOnInit() {
  }

  onSubmit(e) {
    event.preventDefault();

    const opts = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer YELP_API_TOKEN_HERE'
      })
    };

    this.http.get(environment.googlePlaces.urlBase + 'pizza' + environment.googlePlaces.key).subscribe(
      res => {
        console.log(res);
        // this.urants = res;
      }
    );



  }

}
