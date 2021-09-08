/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
$(document).ready(function() {

const createTweetElement = function(tweet) {
  const markup = ` <div class='tweet-container'>
  <header class='article-tweet header'>
  <div class='article-tweet header name'>
    <i class="fas fa-user-ninja icon"></i>
    <label class='name-text'>${tweet.user.name}</label>
  </div>
  <label class='article-tweet header tag'>${tweet.user.handle}</label>
</header>
<article class='article-tweet main'>
${tweet.content.text}
</article>
<footer class='article-tweet footer'>
  <label>${timeago.format(tweet.created_at)}</label>
  <div>
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
</footer>
</div>`
return markup;
}

const renderTweet = (tweetArr) => {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $('.tweets-container').empty();
  for (const tweet of tweetArr) {
    const $tweet = createTweetElement(tweet);
    $('.tweets-container').append($tweet);
  }
}


const loadTweets = () => {
  $.ajax('/tweets', {method: 'GET'})
  .then(function (tweets) {
    renderTweet(tweets.reverse());
  })
}

$('.new-tweet form').on('submit', function(){
  event.preventDefault(); 
  console.log( $( this ).serialize() );
  const data = $( this ).serialize();
  $.ajax(`/tweets/`, {method: 'POST', data});
  loadTweets();
})


loadTweets();
})