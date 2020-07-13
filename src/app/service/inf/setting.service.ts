import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SettingModel } from '../../models/setting.model';

@Injectable({ providedIn: 'root' })
export class SettingService implements Resolve<SettingModel> {

  public settings = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SettingModel> {
    return this.getAllSettings();
  }
  getAllSettings(): Observable<SettingModel> {
    return this.http.get<SettingModel>('/assets/setting/setting.json').pipe(tap(result => {
      this.settings.next(result);
    })
    );
  }
}
