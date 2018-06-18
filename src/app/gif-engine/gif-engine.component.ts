import { Component, ViewEncapsulation } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gif-engine',
  templateUrl: './gif-engine.component.html',
  styleUrls: ['./gif-engine.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class GifEngineComponent {

  public inputValue: any;
  public gifList: any[];
  public isLoading: boolean;
  constructor(private http: HttpClient) {
    this.isLoading = false;
    this.inputValue = new Subject<any>();
    this.inputValue.pipe(
      filter(value => value !== ''),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((value: string) => this.fetchGifs(value)),
      map(data => data['results']),
    ).subscribe(data => {
      this.isLoading = false;
      this.gifList = data;
    });
  }

  searchGif(value: string) {
    this.inputValue.next(value);
  }

  fetchGifs(value: string): Observable<any> {
    this.isLoading = true;
    return this.http.get('https://api.tenor.com/v1/search?q=' + value +'&key=LIVDSRZULELA&limit=8&anon_id=3a76e56901d740da9e59ffb22b988242');
  }

}
