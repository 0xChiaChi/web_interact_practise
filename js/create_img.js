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
				let x=((Math.random() *20)+5);
				let y=((Math.random() *40));
				let area_x=area.offsetWidth/100;
			    x*=area_x;
			    let area_y=area.offsetHeight/100;
			    y*=area_y;
			    var div = document.createElement("div");
			    div.className =" drag-drop artwork";
			    div.style ="height:200px;padding:0;transform:translate("+x+"px, "+y+"px);";
			    div.innerHTML = '<img src="collection/'+value['圖片名稱']+'"class="w-100 h-100" style="object-fit: contain;" value="'+value['價格']+'">';
			    area.appendChild(div);
			 //    var x = 0;
				// var y = 0;
				// 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
				//   x += div.offsetLeft - div.scrollLeft + div.clientLeft;
				//   y += div.offsetTop - div.scrollLeft + div.clientTop;
			 // 	 //  x*=0.5;
				//   // y*=0.5;

				// div.style.webkitTransform=div.style.transform="translate(" + x + "px, " + y + "px)";
				console.log("1"+$(div).offset().top);
				console.log("2"+$(div).offset().bottom);
				console.log("3"+$(div).offset().left);
				console.log("4"+$(div).offset().right);
				if($(div).offset().bottom>area.offsetHeight/2||$(div).offset().top>area.offsetHeight/2){
					y*=0.1;
				}
				if($(div).offset().left>area.offsetWidth/2||$(div).offset().right>area.offsetWidth/2){
					x*=0.1;
				}
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