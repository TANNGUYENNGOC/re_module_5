import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImgSliderRoutingModule} from './img-slider-routing.module';
import {ImgSliderComponent} from './img-slider/img-slider.component';


@NgModule({
  declarations: [ImgSliderComponent],
  imports: [
    CommonModule,
    ImgSliderRoutingModule
  ]
})
export class ImgSliderModule {
}
