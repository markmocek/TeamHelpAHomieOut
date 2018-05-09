import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../services/data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user = {
    name: null,
    email: null,
    favFoods: null,
    idUrl: null,
    password: null
  }

  userID = [];

  constructor(private db: AngularFireDatabase, private _data: DataService) {}

  ngOnInit() {
    this._data.currentUser.subscribe(res => this.userID = res);
    this._data.changeCurrentUser(this.userID);
  }

  getProfile(listPath): Observable<any> {
    return this.db.object(listPath).valueChanges();
  }

  onSubmit(form: any): void {

    console.log('submitted username value:', form.username);
    console.log('submitted password value:', form.password);

    this.getProfile('/users/' + form.username).subscribe(x => {
      console.log(x)
      this.user.name = x.name
      this.user.email = x.email
      this.user.favFoods = x.favfoods
      this.user.idUrl = x.idUrl
      this.user.password = x.password
    })

    if (form.password == this.user.password) {
      console.log('Password is the same.')
    } else {
      console.log('Password is NOT the same.')
    }
  }
}
