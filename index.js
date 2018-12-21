


        $(document).ready(function() {
            $("#blank form").submit(function() {
                $(".name").append("name");
                $(".enter email").append("email");
        
                $("#story").show();
        
                event.preventDefault();
            });
        });