import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  playerControl!: FormControl;
  players = ['Kohli', 'Butler', 'Stokes', 'Rohit', 'Bumrah', 'Rashid Khan', 'Hasaranga'];


  ngOnInit() {
    this.playerControl = new FormControl(this.players[0]);
  }
}
