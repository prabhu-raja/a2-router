import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../shared/models/user";
import { UserService } from "../shared/services/user.service";

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
        <div class="jumbotron text-center" *ngIf="objUser">
            <h1>{{objUser.name}} {{objUser.username}}</h1>
            <img [src]="objUser.avatar" class="img-responsive img-circle">
        </div>
    `
})
export class AboutUserComponent implements OnInit {
    objUser: User;

    constructor(
        private actRoute: ActivatedRoute, 
        private service: UserService) { }

    ngOnInit() {
        let userName  = this.actRoute.snapshot.params['username'];
        this.service
            .getUser(userName)
            .then(usr => this.objUser = usr);
        //this.objUser = users.find(usr => usr.username === userName);
    }
}