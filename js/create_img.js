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
				let x=((Math.random() *50)+5);
				let y=((Math.random() *60)+5);
				let area_x=area.offsetWidth/100;
			    x*=area_x;
			    let area_y=area.offsetHeight/100;
			    y*=area_y;
			    var div = document.createElement("div");
			    div.className =" drag-drop artwork";
			    div.style ="height:200px;padding:0;transform:translate("+x+"px, "+y+"px); max-width:60%";
			    div.innerHTML = '<img src="collection/'+value['圖片名稱']+'" class="w-100 h-100" style="object-fit: contain;" value="'+value['價格']+'">';
			    area.appendChild(div);
			 //    var x = 0;
				// var y = 0;
				// 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
				//   x += div.offsetLeft - div.scrollLeft + div.clientLeft;
				//   y += div.offsetTop - div.scrollLeft + div.clientTop;
			 // 	 //  x*=0.5;
				//   // y*=0.5;

				// div.style.webkitTransform=div.style.transform="translate(" + x + "px, " + y + "px)";
				// console.log("1"+$(div).offset().top);
				// console.log("3"+$(div).offset().left);
				// if($(div).offset().top>area.offsetHeight){
				// 	y-=(y-area.offsetHeight);
				// }
				// if($(div).offset().left>area.offsetWidth){
				// 	x-=(x-area.offsetWidth);
				// }
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