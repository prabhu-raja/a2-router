import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../shared/models/user";

@Component({
    selector: 'about-user',
    styles: [`
    img {
        max-width: 300px;
        margin: 20px auto;
    }
  ` ],
    template: `
        I am About 👨🏻
        <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
        <div class="jumbotron text-center">
            <h1>{{objUser.name}} {{objUser.username}}</h1>
            <img [src]="objUser.avatar" class="img-responsive img-circle">
        </div>
    `
})
export class AboutUserComponent implements OnInit {
    objUser: User;

    constructor(
        private actRoute: ActivatedRoute, 
        private router  : Router) { }

    ngOnInit() {
        // Inspite getting from the services we getting from resolve routing
        /*
        let userName  = this.actRoute.snapshot.params['username'];
        this.service
            .getUser(userName)
            .then(usr => this.objUser = usr);
        */
       this.actRoute.data
        .subscribe((routeData: {rUser: User}) => {
            this.objUser = routeData.rUser
        });
    }

    goBack() {
        this.router.navigate(['/about']);
    }
}