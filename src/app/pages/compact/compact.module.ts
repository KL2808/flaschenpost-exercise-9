import { CompactComponent } from './compact.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompactBeerCardComponent } from './compact-beer-card/compact-beer-card.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SortTypeToggleModule } from 'src/app/shared/components/sort-type-toggle/sort-type-toggle.module';
import { PriceLimitToggleModule } from 'src/app/shared/components/price-limit-toggle/price-limit-toggle.module';

@NgModule({
  declarations: [CompactComponent, CompactBeerCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CompactComponent }]),
    CardModule,
    SortTypeToggleModule,
    PriceLimitToggleModule,
  ],
  providers: [],
})
export class ComapctModule {}
