var chastine = $("input:radio[name=chastine]:checked").val();

var lull = $("input:radio[name=lull]:checked").val();

var gaz = $("input:radio[name=gaz]:checked").val();

var tree = $("input:radio[name=tree]:checked").val();

$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var chastine= $("input#chastine").val()
      var lull= $("input#lull").val()
      var gaz= $("input#gaz").val()
      var tree= $("input#tree").val()

      $(".names").text(namesInput);
      $(".email").text(emailInput);
      
      

      $("#story").show();

      event.preventDefault();
    });
  });





        $(document).ready(function() {
            $("").submit(function() {
                $(".name").append("name");
                $(".name").prepand("name");
        
                $("#story").show();
        
                event.preventDefault();
            });
        });