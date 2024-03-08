import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../env/environment";
import { AppConstants } from "../constants/app.constants";
import { Observable } from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {

  constructor(private http: HttpClient) { }


  testConnection(): Observable<Object> {
    return this.http.get(environment.rooturl + AppConstants.TEST_API_URL_1, {responseType: 'text'});
  }



  testConnection2(): Observable<Object> {
    const params = {login: 'dupa2' as const};
    return this.http.get(environment.rooturl + AppConstants.TEST_API_URL_2, {responseType: 'json', params: params});
  }

  testConnection3(user: User): Observable<Object> {
    return this.http.post(environment.rooturl + AppConstants.TEST_API_URL_3, user, {responseType: 'text'});
  }
}
