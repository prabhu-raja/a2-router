import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Components
import { DashboardComponent } from "./dashboard.component";
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
// Routing
import { dbRouting } from "./dashboard.routing";

@NgModule({
    imports: [
        CommonModule,
        dbRouting
    ],
    declarations: [
        DashboardComponent,
        DashboardUsersComponent,
        DashboardUsersHomeComponent,
        DashboardUserDetailsComponent
    ],
    providers: [

    ]
})
export class DashboardModule {

}