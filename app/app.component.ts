import { Component } from '@angular/core';
import { JsonService } from './json.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myJson';
  parametro = '';
  result: any = [];
  btnResult: string = 'Generar';
  //APIUrl: string = 'http://10.5.0.120:8983/solr/core2/select?indent=on&q=' + this.param + '&wt=json';

  APIUrl: string = 'http://10.5.0.120:8983/solr/core2/select?indent=on';

  constructor(private json: JsonService) {  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  // tslint:disable-next-line:quotemark
  this.json.verJson(this.APIUrl + "&q=' + doc14  + '&wt=json").
  subscribe(val => (this.result = val), error => (console.log('!UPS tenemos un error: ', error)));
  }
generateData(param): void {
  this.parametro = param;
  this.json
    // tslint:disable-next-line:quotemark
    .verJson(this.APIUrl + "&q=' + doc14+ '&wt=json")
    .subscribe(
    resultQuestion => (this.result = resultQuestion),
    error => (console.log('Ups! we have an error: ', error))
    );
}
}
