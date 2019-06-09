import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) {
  }

ngOnInit() {
}
// ------- Authenticate function
authenticate() {
    let user = {username: '', password: ''};
    // ----- Users json
    let validUsers = [
            {username: 'chandler@friends.com', password: '1234'},
            {username: 'ross@friends.com', password: '1234'},
            {username: 'joey@friends.com', password: '1234'},
            {username: 'rechal@friends.com', password: '1234'}
          ];
    let showError = false; // set Error flag
    let showSuccess = false; // set Success Flag
    let flag = false;
    for (const i in validUsers) { // loop on users array
        if (user.username === validUsers[i].username && user.password === validUsers[i].password) {
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
  volverAlHome(){
      this.router.navigate(['/Principal']);
  }
  }


