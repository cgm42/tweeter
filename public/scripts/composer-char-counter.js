$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on("input", () => {
    const count = 140 - $("#tweet-text")[0].textLength;
    let counter = $("#tweet-text")[0].nextElementSibling.children[2];
    $counter = $(counter);
    $counter.text(count);
    if (count >= 0) $(counter).removeClass("negative-count");
    if (count < 0) $(counter).addClass("negative-count");
  });
});
