$(".card-footer.sizes .card-footer-item").click(function(e) {
  e.preventDefault();
  $(this).parent().prev(".card-footer.download").addClass("visible");
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).parent().prev().children().children(".size").text($(this).attr("size"));
  $(this).parent().prev().children().children(".width").text($(this).attr("width"));
  $(this).parent().prev().children().children(".height").text($(this).attr("height"));
  $(this).parent().prev().children().children("a").attr("size", ($(this).text()));
  $(this).parent().prev().children().children("a").attr("href", ($(this).attr("url")));
})

$(".download.button").click(function() {
  var map = $(this).attr("map");
  var size = $(this).attr("size");
  gtag('event', 'download', {
    'event_category': map,
    'event_label': size,
  });
})

$(".maps .card.map .card-content img").click(function() {
  var original =  $(this).attr("original");
  var alternative =  $(this).attr("alternative");
  var title = $(this).attr("alt");

  if ($(this).hasClass("alternative")) {
    $(this).attr("src", original)
  } else {
    gtag('event', 'zoom in', {
      'event_category': title,
    });
    $(this).attr("src", alternative)
  };

  $(this).toggleClass("alternative");
});