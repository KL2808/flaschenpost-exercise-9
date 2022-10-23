import { DetailedComponent } from './detailed.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedBeerCardComponent } from './detailed-beer-card/detailed-beer-card.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SortTypeToggleModule } from 'src/app/shared/components/sort-type-toggle/sort-type-toggle.module';
import { PriceLimitToggleModule } from 'src/app/shared/components/price-limit-toggle/price-limit-toggle.module';

@NgModule({
  declarations: [DetailedComponent, DetailedBeerCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetailedComponent }]),
    CardModule,
    SortTypeToggleModule,
    PriceLimitToggleModule,
  ],
  providers: [],
})
export class DetailedModule {}
