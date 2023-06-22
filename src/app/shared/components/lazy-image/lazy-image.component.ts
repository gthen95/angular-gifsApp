import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { environmentProd } from 'src/environments/environment';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded:boolean = false;

  // public urlRaizAssets:string = `${environment.baseUrl}/assets/loader.svg`;
  public urlRaizAssets:string = `${environmentProd.baseUrl}/assets/loader.svg`;

  ngOnInit(): void {
    if( !this.url ) throw new Error('Url property is required.');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded=true;
    }, 1000);
  }
}
