$(document).ready(function() {
  $("#turn").text("Player " + convert(player) + "'s turn");
//current user defined above table
//onclick box changes to X or O
  game();

  $("#startGame").on("click", function() {
    reset();
    $("#turn").text("Player " + convert(player) + "'s turn");
    console.clear();
    $("td").text("");
    $("td").off();
    game();
  });

});


function game() {
  $("td").on("click", function() {
    $(this).text(convert(player));
    if (!moveTo(parseInt($(this).attr("id")))) {
      $("td").off();
      if (checkWinner(board)) {
        $("#result").text("Game Over! " + convert(player) + " wins!");
      } else {
        $("#result").text("Game Over!");
      }
    } else {
      $("#turn").text("Player " + convert(player) + "'s turn");
      $(this).off();
    }
  });
}
