import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Components
import { AboutComponent } from "./about.component";
import { AboutUserComponent } from "./about-user.component";
import { AboutSectionComponent } from "./about-section.component";
// Services
import { UserService } from "../shared/services/user.service";
import { AboutUsersResolve } from "../about/about-resolve.service";
// Routing
import { abtRouting } from "./about.routing";


@NgModule({
    imports:[ 
        CommonModule,
        abtRouting
     ],
    declarations: [ 
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ],
    providers: [
        UserService,
        AboutUsersResolve
    ]
})
export class AboutModule { }