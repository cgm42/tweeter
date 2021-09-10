$(() => {
  $(window).scroll(function(e) {
    e.preventDefault();
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 300) {
      $("#page-scroll-button").fadeIn();
    } else {
      $("#page-scroll-button").fadeOut();
    }
  });

  $("#page-scroll-button").on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 300);
    $(".new-tweet").slideDown("fast");
    return false;
  });
});
