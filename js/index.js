


      function leTriangle() {
        var chastine = document.getElementById("chastine").value;
        var lull= document.getElementById("lull").value;
        var gaz= document.getElementById("gaz").value;
        var tree = document.getElementById("tree").value;

      if(chastine === '' || lull === '' || gaz === '' || tree === '') {
        alert("Please enter the answers");
      }


      }
      var testResults = function(one, two , three ,four){
        return one + two + three + four ;
        }
        $(document).ready(function(){
     
          $("form#test").submit(function(event){
            var chastine = parseInt($("input:radio[name=chastine]:checked").val());
            var lull = parseInt($("input:radio[name=lull]:checked").val());
            var gaz = parseInt($("input:radio[name=gaz]:checked").val());
            var tree = parseInt($("input:radio[name=tree]:checked").val());
            
     
            var result = testResults(chastine,lull,gaz,tree);
     
            $("#display").text("Your score is:" + result);
     
           event.preventDefault();
            $(".final").show();
          });
        });

