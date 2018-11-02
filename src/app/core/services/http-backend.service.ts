import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorHandlingService } from './http-error-handling.service';

@Injectable()
export class HttpBackendService {

  constructor(private httpClient: HttpClient,
              private httpErrorHandling: HttpErrorHandlingService) { }

  /**
   * Creates a generic get request. T: responseType
   * @param url: url without the base url
   * @returns: an observable for the request
   */
  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.baseUrl}${url}`)
           .catch(err => this.httpErrorHandling.handleError(err));
  }

  /**
   * Creates a generic post request. T: responseType, U: requestType
   * @param url: url without the base url
   * @returns: an observable for the request
   */
  post<T, U>(url: string, data: U): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(data);
    return this.httpClient.post<T>(`${environment.baseUrl}${url}`, body, {
            headers: headers,
            responseType: 'json'
          })
          .catch(err => this.httpErrorHandling.handleError(err));
  }
}
