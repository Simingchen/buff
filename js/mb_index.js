$(function(){
	// 导航
	$(".header .topNav").children("li").each(function(){
      	if($(this).find(".sonnav").length){
          	$(this).addClass("down");
      	}
  	})
  	$(".header .topNav li").mouseenter(function(){
		$(this).children(".sonnav").stop().fadeIn(0).addClass("fadeInUp");
	})
	$(".header .topNav li").mouseleave(function(){
		$(this).removeClass("on");
		$(this).children(".sonnav").removeClass("fadeInUp").stop().fadeOut(300);
	})

	$(".header form").mouseenter(function(){
		$(this).children("input").stop().fadeIn(160).addClass("on");
		placeholder(".header input");
	}).mouseleave(function(){
		$(this).children("input").stop().fadeOut(160).removeClass("on");
		$(this).children("span").hide();
	})
	$('.header form input').on('keydown', function (event) {
    	if (event.keyCode == 13) {
      		$(".header form button").trigger("click");
      		return false;
    	}
	});

	$(".header .weixin").mouseenter(function(){
		$(this).children("div").stop().fadeIn(260);
	}).mouseleave(function(){
		$(this).children("div").stop().fadeOut(260);
	})

  // 报价弹窗
  $(".tx-box .baojia").click(function(){
      $(".baojiamask").fadeIn(160,function(){
          $(".baojiamask .bjbox").css("display","block").removeClass("zoomOut").addClass("animated zoomIn");
      });
  })
  $(".baojiamask .close_btn").click(function(){
      $(".baojiamask .bjbox").removeClass("zoomIn").addClass("animated zoomOut");
      $(".baojiamask").delay(160).fadeOut(200,function(){
          $(".baojiamask .bjbox").css("display","none");
      });
  })

  	// placeholder兼容
    function placeholder(target){
        var browser=navigator.appName;         
        var b_version=navigator.appVersion;
        var version=b_version.split(";");       
        if(version.length == 1){
            return;
        }else{
            var trim_Version=version[1].replace(/[ ]/g,"");
            if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0" || browser==
            "Microsoft Internet Explorer" && trim_Version=="MSIE8.0" || browser==
            "Microsoft Internet Explorer" && trim_Version=="MSIE9.0"){
            	$(target).siblings("span").show();
                $(target).siblings("span").click(function(){
                    $(this).siblings("input").focus();
                })
                $(target).focus(function() {
                    $(this).siblings("span").hide();
                })
                $(target).blur(function(){
                    if($(this).val() == "" && $(this).is(':visible')) {
                        $(this).siblings("span").show();
                    }
                })
            }            
        }
    }

	  layui.use(['form'], function () {
        var form = layui.form , layer = layui.layer;
        form.on('submit(submit)', function (data) {
            var _form = $(this).parents('form');
            $.ajax({
                type: "POST",
                url: _form.attr('action'),
                data: _form.serialize(),
                success: function (res) {
                    layer.msg(res.msg, {}, function () {
                        if (res.code == 1) {
                            $(".my_form")[0].reset();
                        }
                    });
                }
            });
            return false;
        });
    });
})
function goTop(){
	$('html,body').animate({'scrollTop':0},600); //滚回顶部的时间，越小滚的速度越快~
}