import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';


const rout: Routes = [
  {
    path: '',
    component: ArticleComponent
  }
];

export const articleRouter = RouterModule.forChild(rout);
