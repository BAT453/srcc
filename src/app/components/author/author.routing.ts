import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorComponent } from './author.component';


const rout: Routes = [
  {
    path: '',
    component: AuthorComponent
  }
];

export const authorRouter: ModuleWithProviders = RouterModule.forChild(rout);
