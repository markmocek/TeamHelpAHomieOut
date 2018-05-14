import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../services/data.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  htmlVariable: string = '';

  user = {
    name: null,
    email: null,
    favFoods: null,
    idUrl: null,
    password: null
  }

  userID = [];

  constructor(private db: AngularFireDatabase, private _data: DataService, private router: Router) {}

  ngOnInit() {
    this._data.currentUser.subscribe(res => this.userID = res);
    this._data.changeCurrentUser(this.userID);
  }

  getProfile(listPath): Observable<any> {
    return this.db.object(listPath).valueChanges();
  }

  onSubmit(form: any): void {
    this.getProfile('/users/' + form.username).subscribe(x => {
      this.user.name = x.name;
      this.user.email = x.email;
      this.user.favFoods = x.favfoods;
      this.user.idUrl = x.idUrl;
      this.user.password = x.password;
    });

    if (form.password === this.user.password) {
      this.userID = [form.username];
      this._data.changeCurrentUser(this.userID);
      this.router.navigate(['/']);
    } else {
      this.htmlVariable = '<font color="red">Wrong username or password'
        + '<p><b>BUG: If this is your first attempt, hit sumbit again.</b></font>';
    }
  }
}
