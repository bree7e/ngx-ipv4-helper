import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ipv4-demo';
  block1 = `
  <div ngxSuffixWrapper *ngIf="show">
    <input ngxSuffix=".example.com" value="domain" />
  </div>
  `;
  block2 = `
  <div ngxSuffixWrapper *ngIf="show">
    <input ngxSuffix=".angular.com" [(ngModel)]="domain" />
  </div>
  `;
}
