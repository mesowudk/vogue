
 
     $(function(){
         $("#modal").hide();
         $("#login,#login_icon").on("click",function(){
             $("#modal").show();
             $("#close_btn").on("click",function(){
              $("#modal").hide();
            });
         });
                   
        $("#search_form").hide();
        $(".search_icon").on("click",function(){
            $("#search_form").slideToggle();
            if(window.innerWidth<=960){
                $("nav").hide();
            }
        });
    
        $(window).on("resize",function(){
            if(window.innerWidth>960){
                $("nav").show();
            }
        });
    
        $(window).on("resize",function(){
            if(window.innerWidth<=960){
            $("nav").hide();
            }

        });

        $("#tgl_menu").on("click",function(){
            $("nav").slideToggle();
            $("#search_form").hide();
        });

      
        $("#side_menu").on("mouseover",function(){
            $("#side_menu_box").css("visibility","visible");
        });

        $("#side_menu_box").on("mouseout",function(){
            $(this).css("visibility","hidden");
        });
    
   
    });


