import { Routes, RouterModule } from "@angular/router";
import { NewspaperComponent } from "./newspaper.component";

const rout: Routes = [
  {
    path: '',
    component: NewspaperComponent
  }
];

export const newspaperRouter = RouterModule.forChild(rout);
