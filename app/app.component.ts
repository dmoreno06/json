import { Component } from '@angular/core';
import { JsonService } from './json.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myJson';
  param = 'GBP';
  result: any = [];
  btnResult: string = 'Generar';
  APIUrl: string = 'http://10.5.0.120:8983/solr/core2/select?indent=on&q=' + this.param + '&wt=json';
  constructor(private json: JsonService) {

  }
  ngOnInit() {
    this.json.verJson(this.APIUrl).subscribe(val => (this.result = val), error => (console.log('!UPS tenemos un error: ', error)));


  /* ngOnInit(){valval
    this.result.verJson('http://10.5.0.120:8983/solr/core2/select?indent=on&q=*:*&wt=json').subscribe(val => {
      console.log(val);
   });
 */
   /* answerQuestion(): void {
    this.json
      .verJson(this.APIUrl)
      .subscribe(
      resultQuestion => (this.result = resultQuestion),
      error => (console.log('Ups! we have an error: ', error))
      );
  }
}
