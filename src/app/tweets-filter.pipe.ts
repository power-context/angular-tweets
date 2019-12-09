import { Pipe, PipeTransform } from '@angular/core';
import { Tweet } from './shared/tweet-interface';

@Pipe({
    name: 'tweetFilter'
})

export class TweetsFilterPipe implements PipeTransform{
    transform(tweets: Tweet[], search: string): Tweet[] {

        if(!search){
            return tweets
        }
        return tweets.filter((tweet)=>{
            return tweet.text.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
    }

}