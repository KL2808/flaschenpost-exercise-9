import { DetailedComponent } from './detailed.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedBeerCardComponent } from './detailed-beer-card/detailed-beer-card.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [DetailedComponent, DetailedBeerCardComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([{ path: '', component: DetailedComponent }]),
  ],
  providers: [],
})
export class DetailedModule {}
