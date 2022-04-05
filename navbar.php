    <div id="dropzone" class="dropzone"></div>
    <div class="row m-md-0">
        <div class="col-4 justify-content-center align-self-center">
            <h5>Subtitle</h5>
        </div>
        <div class="col-4 justify-content-center align-self-center" style="display: flex; justify-content: center; align-items:flex-start;">
            <h5>Website title</h5>
        </div>
        <div class="col-4 mt-0" style="background-color: transparent;">
            <div class="social-media justify-content-center align-self-center pt-0" style="font-size: 24px">
            	<div class="col">
            		<a href="#"class="fa-brands fa-facebook"></a>
            	</div>
            	<div class="col">
            		<a href="#"class="fa-brands fa-instagram"></a>
            	</div>
            	<div class="col">
            		<a class="fa-solid fa-cart-shopping" data-toggle="modal" data-target="#Modal"></a>
            	</div>
            </div>
        </div>
    </div>
<!-- Modal -->
<div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">購物車</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
	        <form>
		      	<table class="table">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">商品名稱</th>
				      <th scope="col">價格</th>
				      <th scope="col">修改</th>
				    </tr>
				  </thead>
				  <tbody id=modal_tbody>
				  </tbody>
				</table>
				<div class="modal-footer">
					<input type="button" class="btn btn-secondary" data-dismiss="modal" value="返回">         
					<input type="button" name="button" onclick="alert('感謝你的購買')" class="btn btn-primary" id="login" value="購買">
				</div>
	        </form>
        </div>
       </div>
    </div>