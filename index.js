var chastine = $("input:radio[name=chastine]:checked").val();

var lull = $("input:radio[name=lull]:checked").val();

var gaz = $("input:radio[name=gaz]:checked").val();

var tree = $("input:radio[name=tree]:checked").val();

$(document).ready(function() {
    $(".container").submit(function(event) {
      var chastine= $("radio#chastine").val()
      var lull= $("radio#lull").val()
      var gaz= $("radio#gaz").val()
      var tree= $("radio#tree").val()

      var names= $(".names").text(namesInput);
      var email= $(".email").text(emailInput);
      
      

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