import { NgModule } from '@angular/core';
import { searchRouter } from './search.routing';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    searchRouter
  ],
  declarations: [SearchComponent]
})

export class SearchModule { }
