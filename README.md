# NgxIpv4Helper

# ngx-ipv4-helper

## Demo

![ngx-ipv4-helper demo]()

[Demo application](https://bree7e.github.io/ngx-ipv4-helper/)

## Installation

To install this library, run:

```bash
$ npm install ngx-ipv4-helper --save
```

and then import module:

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { NgxIpv4HelperModule } from "ngx-ipv4-helper"; // <===

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxIpv4HelperModule, // <===
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage

`ngxIpv4Helper` should place on input with `ngControl`

Template form

```html
<input ngModel ngxIpv4Helper />
```

Reactive form

```html
<input [formControl]="ip" ngxIpv4Helper />
```

```ts
ip = new FormControl("");
```

## Build

Run `ng build ngx-ipv4-helper` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-ipv4-helper`, go to the dist folder `cd dist/ngx-ipv4-helper` and run `npm publish`.
