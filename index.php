<!DOCTYPE html>
<html>
<head>
<?php include("header.php"); ?>	
</head>
<body>
 <div class="container-fluid" >
	<?php include("navbar.php"); ?>	
	<div id="area" class="desktop"style="height: 2000px;width: 100%; ">
	</div>
	<footer class="blog-footer py-5 container">
	  <div class="row">
	    <div class="col-12 col-md">
	    	<div class="ml-5">
	    		<i class="fa-solid fa-paintbrush" style="font-size: 24px"></i>
	    	</div>
	      
	      <small class="d-block text-muted">© 2021-2022</small>
	    </div>
	    <div class="col-6 col-md">
	      <h5 >安全</h5>
	    </div>
	    <div class="col-6 col-md">
	      <h5 >準確</h5>
	    </div>
	    <div class="col-6 col-md">
	      <h5 >效率</h5>
	    </div>
	    <div class="col-6 col-md">
	      <h5 >完善</h5>
	    </div>
	  </div>
	</footer>
</div>
</body>
<script type="text/javascript" src="js/create_img.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript">
	function reart(name,price,e) {
		console.log(name);
		var tr_re=$(e).closest("tr");
		tr_re.remove();
		var div = document.createElement("div");
	    div.className =" drag-drop artwork";
	    div.style ="height:200px;padding:0; top:"+(Math.floor(Math.random() * 100)+5)+"%;left: "+(Math.floor(Math.random() * 100)+5)+"%;";
	    div.innerHTML = '<img src="collection/'+name+'"class="w-100 h-100" style="object-fit: contain;" value="'+price+'">';
	    area.appendChild(div);
	}
</script>
</html>