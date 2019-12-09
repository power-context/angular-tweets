import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Tweet } from './tweet-interface';

@Injectable({
  providedIn: 'root'
})

export class TweetServiceService {

  public tweet: Tweet
  public dbPath: string = "/tweets"
  tweetRef: AngularFireList<Tweet> = null

  constructor(public db: AngularFireDatabase){
    this.tweetRef = this.db.list(this.dbPath)
  }

  getAllTweets() :AngularFireList<Tweet>{
    return this.tweetRef
  }

  addTweets(tweet: Tweet){
    return this.tweetRef.push(tweet)
  }

  removeTweet(key: string){
    return this.tweetRef.remove(key)
  //  this.tweets = this.tweets.filter(t => t.id !== id)
  }

  changeTweet(key: string, value: any): Promise<void>{
    return this.tweetRef.update(key, value)
  }
}
