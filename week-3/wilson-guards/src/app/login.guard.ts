import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {}

    CanActivate() {
        let loggedIn = Math.random() <0.5;

        if (!loggedIn) {
            alert("You're not logged in and will be redirected to the login page");
            this.router.navigate( commands: ["/login"]);
        }

        return loggedIn;
    }
}