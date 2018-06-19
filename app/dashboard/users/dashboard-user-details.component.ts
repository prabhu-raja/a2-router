import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";

@Component({
    template: `
        I am DB User👨🏻 Details 
        <div *ngIf="user">
            {{user.username}}
        </div>
    `
})
export class DashboardUserDetailsComponent implements OnInit {
    user: User;
    constructor(
        private service: UserService, 
        private actRoute: ActivatedRoute) { }

    ngOnInit() { 
        // subscribe/foreach through the observables
        this.actRoute
            .params
            .subscribe(params => {
                let userName = params['username'];
                this.service.getUser(userName).then(usr => this.user = usr);
            });

        // When switching the users snapshot.params not get updated
        /*
        let userName = this.actRoute.snapshot.params['username'];
        this.service.getUser(userName).then(usr => this.user = usr);
        */
    }

}