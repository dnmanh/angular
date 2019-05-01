import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherService{
    city = '';
    constructor(private httpClient: HttpClient){}

    getTemperature(city: string){
        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=533709ef4d563dd50be0c7fe73fa497f&units=metric";
        return this.httpClient.get(url)
        .toPromise()
        .then(res => res);
    }
}