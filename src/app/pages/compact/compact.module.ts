import { CompactComponent } from './compact.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompactBeerCardComponent } from './compact-beer-card/compact-beer-card.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [CompactComponent, CompactBeerCardComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([{ path: '', component: CompactComponent }]),
  ],
  providers: [],
})
export class ComapctModule {}
