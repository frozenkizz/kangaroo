// sự kiện sp bay vào giỏ hàng

$(document).on('click','.btn-buy-now', function(e) {
	e.preventDefault(); // loại bỏ sự kiện  

	
	if($(this).hasClass('disable')) {
		return false;
	}
	$(document).find('.btn-buy-now').addClass('disable');
	
	var parent= $(this).parents('.product-content-img');
	var cart= $(document).find('#cart-shop');
	var src=parent.find('img').attr('src'); // lấy thẻ img từ phần tử cha
	// lấy vị trí top and left
	var parTop= parent.offset().top;	
	var parLeft= parent.offset().left;
	// truyền class và lưu trữ thẻ img sau đó append vào body
	$('<img/>' , {
		class: 'img-product-fly',
		src: src
	}).appendTo('body').css({
		// xác lập vị trí
		'top' : parseInt(parTop) + parseInt(parent.height()) -80,
		'left' : parseInt(parLeft) + 67
	});
	setTimeout(function() {
		$(document).find('.img-product-fly').css({
			'top'  : cart.offset().top - 30 ,
			'left' : cart.offset().left -30
		});
		setTimeout(function() {
			$(document).find('.img-product-fly').remove();
			$(document).find('.btn-buy-now').removeClass('disable');
		},500)
	},500);
});
// show product
$(document).on('click','.btn-buy-now-hover', function(e) {
	e.preventDefault(); // loại bỏ sự kiện  

	
	if($(this).hasClass('disable')) {
		return false;
	}
	$(document).find('.btn-buy-now-hover').addClass('disable');
	
	var parent= $(this).parents('.modal-containar');
	var cart= $(document).find('#cart-shop');
	var src=parent.find('img').attr('src'); // lấy thẻ img từ phần tử cha
	// lấy vị trí top and left
	var parTop= parent.offset().top;	
	var parLeft= parent.offset().left;
	// truyền class và lưu trữ thẻ img sau đó append vào body
	$('<img/>' , {
		class: 'img-product-fly-hover',
		src: src
	}).appendTo('body').css({
		// xác lập vị trí
		'top' : parseInt(parTop) +  100,
		'left' : parseInt(parLeft) + 180
	});
	setTimeout(function() {
		$(document).find('.img-product-fly-hover').css({
			'top'  : cart.offset().top - 50 ,
			'left' : cart.offset().left -50
		});
		setTimeout(function() {
			$(document).find('.img-product-fly-hover').remove();
			$(document).find('.btn-buy-now-hover').removeClass('disable');
		},500)
	},500);
});

//show cart

// ẩn hiện thanh cart
document.getElementById('giohang').style.display='none';

function showhide() {
	var x= document.getElementById('giohang');
	if (x.style.display=='block') {
		x.style.display='none';
	}else {
		x.style.display='block';
	}
}
//end ẩn hiện thanh cart
//đưa danh sách chọn vào array
var giohang=[];
// thêm vào giỏ 1
function addcart(x) {
	var pa= x.parentNode.parentNode.parentNode;
	var hinh=pa.children[1].children[0].children[0].src;
	var tensp=pa.children[0].children[0].children[0].innerHTML;
	var gia=pa.children[1].children[5].children[0].innerHTML;
	var soluong=1;
	// alert(hinh + tensp + gia);
	var item = [hinh, tensp, gia, soluong];
	giohang.push(item);
	// gán số lượng trên giỏ 
	
	document.getElementById('countcart').innerText= giohang.length;
	// show giỏ hàng
	document.getElementById('mycart').innerHTML = showcart();
}

// thêm vào giỏ 2
function myaddcart(x) {
	var pa= x.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
	var hinh=pa.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].src;
	var tensp=pa.children[0].children[0].children[0].innerHTML;
	var gia=pa.children[1].children[0].children[0].children[1].children[0].children[0].children[0].innerHTML;
	var soluong=1;
	// alert(hinh + tensp + gia);
	var item = [hinh, tensp, gia, soluong];
	giohang.push(item);
	// console.log(giohang);
	// // gán số lượng trên giỏ 
	
	document.getElementById('countcart').innerText= giohang.length;
	// // show giỏ hàng
	document.getElementById('mycart').innerHTML = showcart();
}
// hiên thị các sản phẩm trong giỏ
function showcart() {
	var kq='';
	var tonggiatri=0;
	for (let i = 0; i < giohang.length; i++) {
		const hinh 		= giohang[i][0];
		const tensp 	= giohang[i][1];
		const gia 		= giohang[i][2];
		const soluong 	= giohang[i][3];
		const thanhtien	= (myNumber(gia)*soluong);
		
		tonggiatri+=thanhtien;
		
			kq+= ' <td> <img src="' +hinh +'"></td>';
			kq+= ' <td>'+tensp+'</td>'; 
			kq+= ' <td>' +"x"+soluong+'</td>';kq+='</br>';
			kq+= ' <td>'+"&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;"+gia+'</td>';
			
		
		kq+='</br>';
		
	}
	kq+='</br>';
	kq+='</br>';
	kq+='<tr>';
	kq += '<td>'+tonggiatri+"đ"+'</td>';
	kq+='</tr>';
	return kq;
}

// chuyển đổi kiểu string thành number
function myNumber(x) {
	var number = x.match(/\d/g);
	number = number.join("");
	return number;
}

// event scroll overlay left
$(document).ready(function() {
	$(window).scroll(function (event) { 
		var heihgt_body = $('html, body').scrollTop();
		//  console.log(heihgt_body);
		if( heihgt_body >300) {
			$('.scroll-overlay_left, .scroll-overlay_right').addClass('show_overlay');
		} else {
			$('.scroll-overlay_left, .scroll-overlay_right').removeClass('show_overlay');
		}
		if( heihgt_body >= 800 && heihgt_body < 1300) {
			$('.scroll-overlay_left-element.overlay-one').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-one').removeClass('show_overlay-width');
		}
		if( heihgt_body >= 1300 && heihgt_body < 1800) {
			$('.scroll-overlay_left-element.overlay-two').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-two').removeClass('show_overlay-width');
		}if( heihgt_body >= 1800 && heihgt_body < 2300) {
			$('.scroll-overlay_left-element.overlay-three').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-three').removeClass('show_overlay-width');
		}if( heihgt_body >= 2300 && heihgt_body < 2800) {
			$('.scroll-overlay_left-element.overlay-four').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-four').removeClass('show_overlay-width');
		}if( heihgt_body >= 2800 && heihgt_body < 3300) {
			$('.scroll-overlay_left-element.overlay-five').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-five').removeClass('show_overlay-width');
		}if( heihgt_body >= 3300) {
			$('.scroll-overlay_left-element.overlay-six').addClass('show_overlay-width');
		} else {
			$('.scroll-overlay_left-element.overlay-six').removeClass('show_overlay-width');
		}
	});
})


// event click message
$(function() {
	$('.message-header').click(function() {
		$('.message-pseudo').toggle();
		$('.message-header-right').toggle();
	})
})
