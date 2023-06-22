import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-task-extra';

  panelData = null;
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getPanelData().subscribe((data: any)=>{
      this.panelData = data['result'];
    })
  }
}
