# ng-util v0.0.5

[Site](https://opencodes.github.io/ng-util/) | [Docs](https://opencodes.github.io/ng-util/)  | [Wiki](https://github.com/opencodes/ng-util/wiki "Changelog, Roadmap, etc.") 

The [ng-util](https://opencodes.github.io/ng-util/) library export lots of utility functions which you need in your day-to-day angular app development. Our main intent is to make developer life easy by saving lots of time which we spent on googling and finding the right code or reinventing the wheel. 

## Installation
```shell
$ npm instal ng-util
```
## Usage

```shell
import { Component } from '@angular/core';
import { StringUtilService } from 'ng-util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StringUtilService]
})
export class AppComponent {
  query: string;
  title = 'app';


  constructor(private strUtil: StringUtilService) {
    this.query = this.strUtil.jsonToQueryString({
      id: 10,
      name: 'tom'
    });
  }
}
```
```shell
<h2>Query:{{ query }}! </h2>
```

#### Output:
Query: ?id=10&name=tom
