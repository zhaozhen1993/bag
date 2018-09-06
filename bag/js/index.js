$(function(){
	$(".smile").click(function(){
		$('.smile_ex').toggle();
		$('.song_ex').hide();			
	})
	$(".song").click(function(){
		$('.song_ex').toggle();
		$('.smile_ex').hide();				
	})
	$('.close').click(function(){
		$('.smile_ex').hide();
		$('.song_ex').hide();
	})
	
	
	$('.container_work .col-lg-3').click(function(){
   	    if($(this).index()==0){
   	    	window.location.href="index.html"
   	    }else if($(this).index()==1){
   	    	window.location.href="list.html"
   	    }else if($(this).index()==2){
   	    	window.location.href="book.html"
   	    }
   })
	
	
})