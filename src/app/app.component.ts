import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  json: Object | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const url = 'https://k-ta-yamada.me/api/plank';
    const url = 'https://api.github.com/repos/k-ta-yamada/k-ta-yamada/branches';
    this.http.get(url).subscribe(x => {
      console.log(x);
      this.json = x;
    });
  }

}
