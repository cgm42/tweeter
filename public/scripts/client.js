/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const createTweetElement = function (tweet) {
    //escape function to avoid XSS attack
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    const markup = `<div class='tweet-container'>
                      <header class='article-tweet header'>
                        <div class='article-tweet header name'>
                          <img src='${tweet.user.avatars}'>
                          <label class='name-text'>${tweet.user.name}</label>
                        </div>
                        <label class='article-tweet header tag'>${
                          tweet.user.handle
                        }</label>
                      </header>
                      <article class='article-tweet main'>
                        ${escape(tweet.content.text)}
                      </article>
                      <footer class='article-tweet footer'>
                        <label>${timeago.format(tweet.created_at)}</label>
                        <div>
                          <i class="fas fa-flag"></i>
                          <i class="fas fa-retweet"></i>
                          <i class="fas fa-heart"></i>
                        </div>
                      </footer>
                    </div>`;
    return markup;
  };

  const renderTweet = (tweetArr) => {
    $(".tweets-container").empty();
    for (const tweet of tweetArr) {
      const $tweet = createTweetElement(tweet);
      $(".tweets-container").prepend($tweet);
    }
    return;
  };

  const loadTweets = () => {
    $(".counter").val(140);
    $.ajax("/tweets").then((tweets) => renderTweet(tweets));
  };

  //submit a new tweet via form
  $(".new-tweet form").on("submit", (event) => {
    event.preventDefault();
    if (!event.target[0].value.length) return displayError("No content!");
    if (event.target[0].value.length > 140) return displayError("Too long!");
    const data = $(event.target).serialize();
    $(event.target)[0].reset();
    $.ajax(`/tweets`, { type: "POST", data, success: loadTweets });
  });

  //display error on new tweet form
  const displayError = (msg) => {
    const $alert = $("#alert");
    $alert.addClass("notification");
    $alert.text(msg);
    setTimeout(function () {
      $alert.removeClass("notification");
      $alert.text("");
    }, 2700);
  };

  //"Write a new tweet" arrow animation
  $(".write-tweet-section").on("mouseover", () => {
    $(".arrow").addClass("arrow-dance");
  });

  $(".write-tweet-section").on("mouseout", () => {
    $(".arrow").removeClass("arrow-dance");
  });

  //New tweet form toggle
  $(".write-tweet-section").on("click", () => {
    if ($(".new-tweet").first().is(":hidden")) {
      $(".new-tweet").slideDown("slow");
      $("#tweet-text").show().focus();
    } else {
      $(".new-tweet").slideUp("medium");
      //$(".new-tweet").hide();
    }
  });

  loadTweets();
});
