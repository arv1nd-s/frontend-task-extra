import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getPanelData(){
    return this.http.get('https://uat.utopiatech.in:4520/panel/gettestlist?org_id=3');
  }
}
