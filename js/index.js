var coloo=0

if (chastine === "10") {
   chastine= chastine + 10;
};
if (lull === "10") {
   lull = lull+ 10;
};
if (gaz  === "10") {
   gaz = gaz + 10;
};
if ( tree === "10") {
   tree = tree + 10;
};

if (container === "40" && container === "complete"){
  alert("submitted ! ")  
}
else if(container !== "40"){
    alert("failed ! ")
}




$(".container").show();
$("#correct").text("Your Total Marks: " + container);

event.preventDefault();

};

$(document).ready(function (){
   $('#form board').submit (function(event){


var option = parseInt($("input:radio[name=chastine]:checked ").val());
var optionOne =parseInt( $("input:radio[name=lull]:checked").val());
var optionTwo =parseInt( $("input:radio[name=gaz]:checked").val());
var optionThree =parseInt( $("input:radio[name=tree]:checked").val());

var opt = 0;

Message Input


Message Divine Umurerwa

var chastine = $("input:radio[name=chastine]:checked").val();

var lull = $("input:radio[name=lull]:checked").val();

var gaz = $("input:radio[name=gaz]:checked").val();

var tree = $("input:radio[name=tree]:checked").val();

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

     var answers= $("aswers#hide").click(function(){
        $("p").hide();
      });
      
      $("#show").click(function(){
        $("p").show();
      });   

