import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

import { BookComponent } from './book.component';
import { bookRouter } from './book.routing';

@NgModule({
  imports: [
    bookRouter,
    GridModule
  ],
  declarations: [BookComponent]
})
export class BookModule { }
