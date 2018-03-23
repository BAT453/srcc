import { NgModule } from '@angular/core';
import { newspaperRouter } from './newspaper.routing';
import { NewspaperComponent } from './newspaper.component';

@NgModule({
  imports: [
    newspaperRouter
  ],
  declarations: [NewspaperComponent]
})

export class NewspaperModule { }
