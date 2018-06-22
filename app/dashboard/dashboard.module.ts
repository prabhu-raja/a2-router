import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
// Components
import { DashboardComponent } from "./dashboard.component";
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
// Routing
import { dbRouting } from "./dashboard.routing";
// Services
import { UserService } from "../shared/services/user.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        dbRouting
    ],
    declarations: [
        DashboardComponent,
        DashboardUsersComponent,
        DashboardUsersHomeComponent,
        DashboardUserDetailsComponent
    ],
    providers: [
        UserService
    ]
})
export class DashboardModule {

}