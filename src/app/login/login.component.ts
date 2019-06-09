import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

ngOnInit() {
// tslint:disable-next-line: prefer-const
 let user = {username: '', password: ''};

    // ----- Users json
 const validUsers = [
      {username: 'chandler@friends.com', password: '1234'},
      {username: 'ross@friends.com', password: '1234'},
      {username: 'joey@friends.com', password: '1234'},
      {username: 'rechal@friends.com', password: '1234'}
    ];

 let showError = false; // set Error flag
 let showSuccess = false; // set Success Flag

    // ------- Authenticate function
 function authenticate() {
      let flag = false;

      for (const i in validUsers) { // loop on users array
        if (user.username == validUsers[i].username && user.password == validUsers[i].password) {
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
      // -------- set error or success flags
      if (flag) {
       showError = false;
       showSuccess = true;
      } else {
       showError = true;
       showSuccess = false;
      }
    }

  }
}

