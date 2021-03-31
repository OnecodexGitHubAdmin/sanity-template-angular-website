import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { Banner } from '../../../models/types/banner';
import { SanityService } from '../../../services/sanity.service';

@Component({
  selector: 'templates-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements DynamicComponent {
  imageUrl: string;
  banner: Banner;

  @Input() set data(banner: Banner) {
    if (banner.image.asset) {
      this.imageUrl = this.service.buildImageUrl(banner.image.asset._ref);
    }

    this.banner = banner;
  };

  constructor(private service: SanityService) {}
}
