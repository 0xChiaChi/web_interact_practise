window.onload=function () {
	$.ajax({
		url: './test.csv',
		type: 'GET',
		dataType: 'text',
		success:function(data) {
			console.log(data);
			var jsonData = $.csv.toObjects(data); 
			console.log(jsonData);
			var area = document.getElementById("area");
			$.each(jsonData, function (index, value) { 
				let x=(Math.random() *area.offsetWidth/2);
				let y=(Math.random() *area.offsetHeight);
				if(y>(area.offsetHeight-700)){
					y-=700;
				}if(x>(area.offsetWidth/2-400)){
					x-=400;
				}
			    var div = document.createElement("div");
			    div.className =" drag-drop artwork";
			    div.style ="height:200px;padding:0;transform:translate("+x+"px, "+y+"px);";
			    div.innerHTML = '<img src="collection/'+value['圖片名稱']+'"class="w-100 h-100" style="object-fit: contain;" value="'+value['價格']+'">';
			    area.appendChild(div);
			   	div.setAttribute("data-x", x);
			    div.setAttribute("data-y", y);
			})
		},
		error:function(e) {
			console.log(e);
			alert("出現錯誤");
		},
	});
}