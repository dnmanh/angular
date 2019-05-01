import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  city = 'london';
  weather = 0.0;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(){
    this.weatherService.getTemperature(this.city)
    .then(temp => {console.log(temp.main.temp); this.weather = temp.main.temp;})
    .catch(err => console.log(err));
  }
}
