import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';


const rout: Routes = [
  {
    path: '',
    component: BookComponent
  }
];

export const bookRouter = RouterModule.forChild(rout);
