$document.ready(function(){
    $("button#submit").click(fucntion());
    {
        $("h3").append("<h3>submit</h3>");
    }
    $(document).ready(function() {
        $("button#green").click(function() {
          $("h3").addClass("green-background");
        });