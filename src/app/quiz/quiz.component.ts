import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  url: string = '../../assets/static/players.json';
  players: any;
  selectedBatsmen = '';
  selectedBowler = '';

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.players = res;
      console.log('players... ', this.players);
    });

  }
}
