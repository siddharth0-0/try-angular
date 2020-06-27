import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class editOnClickService{
    constructor(private http: HttpClient){ }
    
    editOnClick(changeOnClick): Observable<any> {
        return this.http.post('http://127.0.01:8000/editPersonDetail/',changeOnClick)
    }

}