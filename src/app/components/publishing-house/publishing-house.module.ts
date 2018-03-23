import { NgModule } from '@angular/core';
import { publishingHouseRouter } from './publishing-house.routing';
import { PublishingHouseComponent } from './publishing-house.component';

@NgModule({
  imports: [
    publishingHouseRouter
  ],
  declarations: [PublishingHouseComponent]
})

export class PublishingHouseModule { }
