import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ipv4-demo';
  ip = new FormControl('');
  block1 = `<input ngModel ngxIpv4Helper />`;
  block2 = `<input [formControl]="ip" ngxIpv4Helper />`;
}
