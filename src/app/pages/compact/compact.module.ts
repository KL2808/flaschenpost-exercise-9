import { CompactComponent } from './compact.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CompactComponent],
  imports: [RouterModule.forChild([{ path: '', component: CompactComponent }])],
  providers: [],
})
export class ComapctModule {}
