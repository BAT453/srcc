import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search.component";

const rout: Routes = [
  {
    path: '',
    component: SearchComponent 
  }
];

export const searchRouter = RouterModule.forChild(rout);
