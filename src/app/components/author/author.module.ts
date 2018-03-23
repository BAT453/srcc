import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

import { AuthorComponent } from './author.component';
import { authorRouter } from './author.routing';

@NgModule({
  imports: [
    authorRouter,
    GridModule
  ],
  declarations:[AuthorComponent]
})
export class AuthorModule { }
