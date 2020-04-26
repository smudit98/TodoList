//strike li on click
$("ul").on("click","li",function(){
	// $(this).css("color","gray");
	// $(this).css("text-decoration","line-through");
	$(this).toggleClass("crossed");
});
// $("li").on("click",function(){
// 	// $(this).css("color","gray");
// 	// $(this).css("text-decoration","line-through");
// 	$(this).toggleClass("crossed");
// });
//delete on x
//event bubbling: will trigger li events
$("ul").on("click","li span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})

});
//adding todos
//.append()
$("input").on("keypress",function(event){
	if(event.which===13){
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+todoText+"</li>");
	}
});

$("#add").on("click",function(){
	$("input").stop().slideToggle(500);
});