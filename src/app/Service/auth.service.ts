import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class AuthService {

    private url = "http://localhost:54164/api/auth";

    constructor(private http: HttpClient) {}

    getAuthor(id: number) {
        return this.http.get(this.url + '/' + id); 
    }

    createAuthor(name: string) {
        var headers={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }        
    return this.http.post(this.url, JSON.stringify(name), headers); 
    }

}