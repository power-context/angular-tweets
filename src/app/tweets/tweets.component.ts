import { Component, OnInit, Input } from '@angular/core';
import { TweetServiceService } from '../shared/tweet-service.service';
import { Tweet } from '../shared/tweet-interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.sass']
})
export class TweetsComponent implements OnInit {

  public search: string = ''
  public tweets: Tweet[] = []

  constructor(public tweetService: TweetServiceService) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets(){
    this.tweetService.getAllTweets()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => 
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(t => {
          this.tweets = t
      })
  }

  removeTweet(key: string){
    this.tweetService.removeTweet(key)
  }

  inCompleted(tweet: Tweet){
  //  this.isCompleted = !this.isCompleted
    this.tweetService.changeTweet(tweet.key, {completed: !tweet.completed})
  }

}