import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpBackendService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.baseUrl}${url}`);
  }

  post<T>(url: string, data: T): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(data);
    return this.httpClient.post<T>(`${environment.baseUrl}${url}`, body, {
            headers: headers,
            responseType: 'json'
          })
  }
}
