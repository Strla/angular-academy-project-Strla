import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	private apiUrl: string = 'https://tv-shows.infinum.academy/';
	constructor(private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IRawShow> }>(`${this.apiUrl}/shows`).pipe(
			map((response) => {
				return response.shows.map((rawShowData: IRawShow) => new Show(rawShowData));
			})
		);
	}
	public getTopRated(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IRawShow> }>(`${this.apiUrl}/shows/top_rated`).pipe(
			map((response) => {
				return response.shows.map((rawShowData: IRawShow) => new Show(rawShowData));
			})
		);
	}

	public getShow(id: string): Observable<Show | null> {
		return this.http.get<{ show: IRawShow }>(`https://tv-shows.infinum.academy/shows/${id}`).pipe(
			map((response) => {
				return new Show(response.show);
			})
		);
	}
}
