import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private http: HttpClient) {}

    private getApiBaseUrl(): string {
        return 'https://api.github.com';
    }

    public get(path: string): Observable<unknown> {
        return this.http.get(`${this.getApiBaseUrl()}/${path}`);
    }

    public post(path: string, body: unknown): Observable<unknown> {
        return this.http.post(`${this.getApiBaseUrl()}/${path}`, body);
    }

    public put(path: string, body: unknown): Observable<unknown> {
        return this.http.put(`${this.getApiBaseUrl()}/${path}`, body);
    }

    public patch(path: string, body: unknown): Observable<unknown> {
        return this.http.patch(`${this.getApiBaseUrl()}/${path}`, body);
    }

    public delete(path: string): Observable<unknown> {
        return this.http.delete(`${this.getApiBaseUrl()}/${path}`);
    }
}
