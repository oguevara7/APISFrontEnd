$(function(){
	$.ajax({
		url : 'https://apisserver.herokuapp.com/products',
		type : "GET",
		dataType : "json",
		success: function(data){
			let new_html = ""
			for(let i = 0; i <data.length; i++){
				new_html += `
				<div class="col-12 col-sm-6 col-md-3 box" id="${data[i]._id}">
        <img  src="${data[i].photo}" class="img-fluid " alt="">
        <p>${data[i].name}</p>
        </div>
				`;
			}
			$("#images").append(new_html);
    	},
    	error: function(data){
    		//do something
    	}
	})
});
