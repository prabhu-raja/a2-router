import { Injectable, Inject } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";

@Injectable()
export class AboutUserResolve implements Resolve<User> {

    constructor(
        private service: UserService,
        private router: Router ) { }

    resolve(actRS: ActivatedRouteSnapshot): any {
        let userName = actRS.params['username'];
        return this.service.getUser(userName).then(usr => {
            if(usr){
                return usr;
            } else {
                // navigate back to the about page.
                this.router.navigate(['/about']);
                return false;
            }
        });
    }
}