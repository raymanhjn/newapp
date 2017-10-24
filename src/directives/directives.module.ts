import { NgModule } from '@angular/core';
import { HideHeaderDirective } from './hide-header/hide-header';
import { ResScrollDirective } from './res-scroll/res-scroll';
@NgModule({
	declarations: [HideHeaderDirective,
    ResScrollDirective],
	imports: [],
	exports: [HideHeaderDirective,
    ResScrollDirective]
})
export class DirectivesModule {}
