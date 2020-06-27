
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class detailService{
    constructor(private http : HttpClient){}

    getUser(): Observable <any> {
        return this.http.get('http://127.0.01:8000/getEmail/')
    }

}


