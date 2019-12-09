import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../shared/tweet-service.service';
import { Tweet } from '../shared/tweet-interface';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.sass']
})
export class AddTweetComponent implements OnInit {
  newTweet: string = ''
  inWork: boolean = false
  tweet = new Tweet()
    /*
    const tweet: Tweet = {
      id: +this.tweets.length + 1,
      text: tweetText,
      completed: true,
      date: new Date(),
      author: 'CNN'
    }
*/

  constructor(private tweetService: TweetServiceService) { }

  ngOnInit() {
  }

  changeTweet(){
    if(this.newTweet.length > 10 || this.newTweet.length  === 0){
      this.inWork = false
    } else {
      this.inWork = true
    }
  }

  addTweet(){
    this.tweet = new Tweet()
    
    this.tweet.author = "CNN"
    this.tweet.date = new Date()
    this.tweet.text = this.newTweet
    this.tweet.completed = true

    this.tweetService.addTweets(this.tweet)
    
    this.tweet = new Tweet()
    this.newTweet = ''
  }

}
