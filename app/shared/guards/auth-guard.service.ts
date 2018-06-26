import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    canActivate() {
        console.log('👮‍ I am checking🚨 to see if you are logged in 🔑');
        return true;
    }

    canActivateChild() {
        console.log('👮‍ Checking🚨 👶 routes');
        return true;
    }

}