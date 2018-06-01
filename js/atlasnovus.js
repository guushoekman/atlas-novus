$(".card-footer.sizes .card-footer-item").click(function(e) {
  e.preventDefault();
  $(this).parent().prev(".card-footer.download").addClass("visible");
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).parent().prev().children().children(".size").text($(this).attr("size"));
  $(this).parent().prev().children().children(".width").text($(this).attr("width"));
  $(this).parent().prev().children().children(".height").text($(this).attr("height"));
  $(this).parent().prev().children().children("a").attr("href", ($(this).attr("url")));
  if ( $(this).hasClass("warning") ) {
    $(this).parent().prev().prev(".card-footer.warning").addClass("visible");
  } else {
    $(this).parent().prev().prev(".card-footer.warning").removeClass("visible");
  }
})

$(".maps .card.map .card-content img").click(function() {
  var original =  $(this).attr("original");
  var alternative =  $(this).attr("alternative");

  $(this).toggleClass("alternative");

  if ($(this).hasClass("alternative")) {
    $(this).attr("src", alternative)
  } else {
    $(this).attr("src", original)
  };
});