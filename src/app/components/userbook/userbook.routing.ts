import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UserBookComponent } from './userbook.component';

const rout: Routes = [
  {
    path: '',
    component: UserBookComponent
  }
];

export const userBookRouter: ModuleWithProviders = RouterModule.forChild(rout);
