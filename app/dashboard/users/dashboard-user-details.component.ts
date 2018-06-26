import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    template: `
        I am DB User👨🏻 Details 
        <div class="jumbotron">
            <div *ngIf="user">
                <h2>{{ user.name }}</h2>
                <div class="form-group">
                    <input type="text" [(ngModel)]="editName" class="form-control">
                </div>
                <div class="form-group text-center">
                    <button (click)="cancel()" class="btn btn-danger">Cancel</button>
                    <button (click)="save()" class="btn btn-success">Save</button>
                </div>
             </div>
        </div>
        
    `
})
export class DashboardUserDetailsComponent implements OnInit {
    user: User;
    editName: string;

    constructor(
        private service: UserService, 
        private router: Router,
        private actRoute: ActivatedRoute) { }

    ngOnInit() { 
        // subscribe/foreach through the observables
        this.actRoute
            .params
            .subscribe(params => {
                let userName = params['username'];
                this.service.getUser(userName).then(usr => {
                    this.user = usr;
                    this.editName = usr.name;
                });
            });

        // When switching the users snapshot.params not get updated
        /*
        let userName = this.actRoute.snapshot.params['username'];
        this.service.getUser(userName).then(usr => this.user = usr);
        */
    }

    // don't save. navigate to /dashboard/users
    cancel() {
        this.router.navigate(['/dashboard/users']);
    }

    //
    save() {
        this.user.name = this.editName;
        this.router.navigate(['/dashboard/users']);
    }

    canDeactivate() {
        console.log('👞Trying to Exit from User Details🏃🏻‍♂️');
        if(this.user.name !== this.editName) {
            return window.confirm('Discard changes?');
        }
        return true;
    }

}