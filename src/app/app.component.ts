import { Component } from '@angular/core';
import { NasaService } from './nasa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quest12';

  imgOfTheDay$: string | undefined;
  constructor(private nasaService: NasaService) {
   this.nasaService.getImageOfTheDay().subscribe(data => {
     this.imgOfTheDay$ = data.url
   })
  }
  ngOnInit(): void {}
}
