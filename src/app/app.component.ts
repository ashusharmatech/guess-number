import { Component, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  guessForm = new FormGroup({});

  disableGuessFlag = false;
  title = 'guess-game';
  noOfTries = 0;
  gameNumber: number;
  guessNumber: number;
  deviation: number;
  message: string;
  state: string;


  ngOnInit(): void {
    this.initializeGame();
  }


  guess(): void {
    this.noOfTries++;
    this.deviation = this.guessNumber - this.gameNumber;
    if (this.deviation === 0) {
      this.message = 'Perfect!! This is the same number I thought! It took ' + this.noOfTries + ' guesses. ';
      this.state = 'success';
      this.disableGuessFlag = true;
    } else if (this.deviation < 0) {
      this.message = ' Your guess ' + this.guessNumber + ' is smaller';
      this.state = 'danger';
    } else {
      this.message = ' Your guess ' + this.guessNumber + ' is higher';
      this.state = 'danger';
    }
  }


  initializeGame(): void {
    this.noOfTries = 0;
    this.gameNumber = Math.trunc(Math.random() * 100) + 1;
  }
}
