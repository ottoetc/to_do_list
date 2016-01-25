function Todo (item) {
  this.item = item;
}

$(document).ready(function() {
  $("form#listForm").submit(function(event) {
    event.preventDefault();

    var item = $("input#item").val();
    var newItem= new Todo(item);

    $("ul#list").append("<li><span class='contact'>" + newItem.item + "</span></li>");

    $("li").click(function() {
      $(this).remove();
    });
  });
});
