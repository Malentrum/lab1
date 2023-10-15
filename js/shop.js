$(document).ready(function() {
	
	$('.add-to-busket-block').hide();
	
	
	$('.add-to-busket-btn').on('click', function() {
		$('.add-to-busket-block').show();
		$('.count-input').val("0");
	});
	
	$('.btn-plus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))+1;
		$('.count-input').val(a);
	});

	$('.btn-minus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))-1;
	
		if(a>=0){
		$('.count-input').val(a);
		}
		else{
			a=0;
		}
	});
	
	$('.btn-close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	$('.close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	let cart = new Array();
	cart=[];
	
	$('.ok-1').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(0, a);
	});
	$('.ok-2').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(1, a);
	});
		$('.ok-3').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(2, a);
	});
	$('.ok-4').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(3, a);
	});
		$('.ok-5').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(4, a);
	});
	
	
	function AddToCard(n, amount){
		if(amount>0) 
		{
			cart[n]=amount; 
		}
	}

	function addRow() {
		for (let i = 0; i < cart.length; i++) {
			if (cart[i] > 0) {
				let productName = '';
	
				switch (i) {
					case 0:
						productName = "Microsoft Office 365 for Family";
						break;
					case 1:
						productName = "Microsoft Office 365 Personal";
						break;
					case 2:
						productName = "Microsoft Office 2021 Pro";
						break;
					case 3:
						productName = "Microsoft Office 2019 Pro Plus";
						break;
					case 4:
						productName = "Microsoft Office 365 (1 Year)";
						break;
					case 5:
						productName = "Microsoft Office 2016 Pro Plus";
						break;
					default:
						break;
				}
	
				if (productName) {
					document.querySelector('.cart-body').insertAdjacentHTML(
						'afterbegin',
						`<div class="row">
							<input readonly class="product${i}"></input>
							<input readonly class="amount${i}"></input>
						</div>`
					);
	
					$(`.product${i}`).val(productName);
					$(`.amount${i}`).val(cart[i]);
				}
			}
		}
	}
	
	window.clearCart = function clearCart(){
		for(let i=0; i<cart.length; i++){
			cart[i]=0;
		}
	}
	$('.cart-link').on('click', function(){
		console.log(cart);
		$('.cart-body').html('');
		addRow();
	});
	
	$('.btn-order').on('click', function() {
		//console.log(cart.length);
		for(let i=0; i<cart.length; i++){
		if(cart[i] != null){
			if(cart[i] >0) {
			var product_n = i;
			var amount = cart[i];
				$.ajax({
					type: "POST",
                    url:'/../php/insert.php',
                    method:'POST',
                    data:{
                        product_n:product_n,
                        amount:amount
                    },
                   success:function(data){
                       alert(data);
                   }
                });
			}
		}
		}
	});
	
});
