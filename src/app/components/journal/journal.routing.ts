import { Routes, RouterModule } from "@angular/router";
import { JournalComponent } from "./journal.component";

const rout: Routes = [
  {
    path: '',
    component: JournalComponent
  }
];

export const journalRouter = RouterModule.forChild(rout);
