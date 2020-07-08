import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SharedDataService {

    public dir = 'rtl';
    public tabs = new BehaviorSubject<{path: string, title: string, children: any, menuActions: any, icon: string}[]>([]);

    public language = new BehaviorSubject(localStorage.getItem('language'));
    currentLanguage = this.language.asObservable();

    public theme = new BehaviorSubject('theme-2');
    currentTheme = this.theme.asObservable();

    public currentPageInfo;

    public action;

    constructor(private http: HttpClient) {
    }

    changeLanguage(lang: string) {
        this.language.next(lang);
    }

    changeTheme(theme: string) {
        this.theme.next(theme);
    }

    getLanguages(): Observable<any> {
       return this.http.get('https://my-json-server.typicode.com/jameasl/language/db');
    }

}
