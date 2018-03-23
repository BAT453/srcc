import { NgModule } from '@angular/core';

import { UserBookComponent } from './userbook.component';
import { userBookRouter } from './userbook.routing';

@NgModule({
  imports: [userBookRouter],
  declarations: [UserBookComponent]
})
export class UserBookModule { }
