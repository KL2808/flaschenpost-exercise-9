import { DetailedComponent } from './detailed.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DetailedComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DetailedComponent }]),
  ],
  providers: [],
})
export class DetailedModule {}
