import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

import { ArticleComponent } from './article.component';
import { articleRouter } from './article.routing';

@NgModule({
  imports: [
    articleRouter,
    GridModule
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
