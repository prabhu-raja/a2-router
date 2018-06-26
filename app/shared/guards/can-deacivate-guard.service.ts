import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
// import { DashboardUserDetailsComponent } from "../../dashboard/users/dashboard-user-details.component";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(cmpt: CanComponentDeactivate) {
        debugger;
        return cmpt.canDeactivate ?  cmpt.canDeactivate() : true;
    }
}


// export class CanDeactivateGuard implements CanDeactivate<DashboardUserDetailsComponent> {
//     canDeactivate(cmpt) {
//         debugger;
//         return cmpt.canDeactivate ?  cmpt.canDeactivate() : true;
//     }
// }