import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class dataOnClickService{
    constructor(private http: HttpClient){

    }

    getOnClick(dataOnClick): Observable<any> {
        return this.http.post('http://127.0.01:8000/getDetail/',dataOnClick)
    }

}