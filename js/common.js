 $(document).ready(function() {

       $('.header_top .icon_menu').click(function(){    	   
            $('.header_top  .myMenu').slideToggle();  
          });

         // -------.features .blog hover-------

        $('.blog').each(function(){
     	  var blog = $(this);
     	  var img = blog.find('img');
     	  var icon = blog.find('i');
     	  var h = blog.find('h4');
     	  var but = blog.find('.features_button');
          
     	 but.hover(
     	  	function(){
     	  		img.css({'border-color':'#ECBA0B'});
     	  		icon.css({'color':'#ECBA0B'});
                h.css({'color':'#ECBA0B'});
     	  		
     	  	},
     	  	function(){
     	  		img.css({'border-color':'#E66768'});
     	  		icon.css({'color':'#fff'});
     	  		h.css({'color':'#fff'});
     	  	});
     	 
         });
      
         
        // -------------------------------------------
         $('.works .gallery a').fancybox();
         
                  // скролл наверх

        $(".footer .top_button").click(function () {
           var y_pos = $('#top').offset().top;
			$("body, html").animate({
				scrollTop: y_pos
			}, 1000);
			return false;
	});
                // скрытие формы

         $('.footer .hide_form').click(function(){
                var button = $(this);
                var form =  $('.footer .contact_form'); 
            ;
            if(form.is(':visible')){
              form.slideUp(500);
              button.html("Show contact form").css({
              	'background-color':'#E66768',
              	'color':'#fff'
              });

              
               }
            else if(form.is(':hidden')){
            	 form.slideDown(500);
            	 button.html("Hide contact form").css({
            	 	'background-color':'#fff',
            	 	'color':'#E66768'

            	 });
            	};
           });
        
			$('.bxslider').bxSlider({
			            speed: 1500,
			            pause: 3500,
			            auto: true
			  });
			    
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
// 	$("form").submit(function() {
// 		$.ajax({
// 			type: "GET",
// 			url: "mail.php",
// 			data: $("form").serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
// 				$.fancybox.close();
// 			}, 1000);
// 		});
// 		return false;
// 	});

 new WOW().init();




});