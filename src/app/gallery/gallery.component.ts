import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// let dataImage = [];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnChanges {
  @Input() typeImage?: string;
  public dataImages: any;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['typeImage']?.currentValue != changes['typeImage'].previousValue
    ) {
      this.getImages();
    }
  }

  getImages() {
    this.setConfig().subscribe((data) => {
      if (data) {
        console.log(data);
        this.dataImages = data;
      }
    });
  }

  setConfig() {
    const API_KEY =
      `14910698-da2d9192ee156a4fb851cc1c6&category=${this.typeImage}&orientation=horizontal`;
    const URL =
      'https://pixabay.com/api/?key=' +
      API_KEY +
      '&q=' +
      encodeURIComponent('red roses');

    return this.http.get(URL);
  }
}
