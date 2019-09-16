$(document).ready(function() {
  $.get("info.txt", function(data) {
    alert(data);
  }, 'text');
  var big = function() {
    $(this).animate({
      "font-size": "150%"
    }, 1000)
  }
  var fade = function() {
    $(".slider").animate({
      "opacity": "0.8"
    }, 0)
  }
  var unfade = function() {
    $(".slider").animate({
      "opacity": "1"
    }, 0)
  }
  $(".slider").click(function() {
    $("#dialog").dialog({
      modal: true,
      width: 300,
      buttons: {
        Cancel: function() {
          $(this).dialog("close");
        },
        Show: function() {
          var info = $(".slider img").attr("alt")
          $("#infoForm").val(info)
        }
      }
    });
  });
  var listNode = $(".slider img");
  $("h1").click(big);
  listNode.mouseover(fade);
  listNode.mouseout(unfade);
});
