import { Routes, RouterModule } from "@angular/router";
import { PublishingHouseComponent } from "./publishing-house.component";

const rout: Routes = [
  {
    path: '',
    component: PublishingHouseComponent
  }
];

export const publishingHouseRouter = RouterModule.forChild(rout);
