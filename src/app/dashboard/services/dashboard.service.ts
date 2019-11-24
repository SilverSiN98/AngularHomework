import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class DashboardService {
    private apiUrl: string;
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })}

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:51764/api/values';  // don't forget to change back to http://localhost:51764/api/values
    }

    get(): Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl);
    }

    post(msg: string): Observable<any> {
      return this.http.post(this.apiUrl, { message: msg }, this.httpOptions );
    }

    put(oldMsg: string, newMsg: string): Observable<any> {
      return this.http.put(this.apiUrl, { oldMessage: oldMsg, newMessage: newMsg }, this.httpOptions );
    }

    delete(msg: string): Observable<any> {
      return this.http.delete(this.apiUrl + "/" + msg, this.httpOptions);
    }
}