import { NgModule } from '@angular/core';
import { JournalComponent } from './journal.component';
import { journalRouter } from './journal.routing';

@NgModule({
  imports: [
    journalRouter
  ],
  declarations: [JournalComponent]
})

export class JournalModule { }
