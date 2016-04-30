$(function(){
	var page = 0;
	var timer = null;

	//封装公用代码
	function anmiatePage(page){
		$('#imgs a').removeClass('cur');
		$('#imgs a').eq(page).addClass('cur');
		$('.cic span').removeClass('cur1');
		$('.cic span').eq(page).addClass('cur1');
	}

	//封装定时器
	function createTime(){
		timer = setInterval(function(){
			page ++;
			if(page > $('#imgs a').size() - 1){
				page = 0;
			}
			anmiatePage(page)
		},2000);
	}

	createTime();

	//btn点击切换事件
	$('.btnr').click(function(){
		clearInterval(timer);
		page ++;
		if(page > $('#imgs a').size() - 1){
			page = 0;
		}
		anmiatePage(page)
		createTime();
	});

	$('.btnl').click(function(){
		clearInterval(timer);
		page --;
		if(page < 0){
			page = 2;
		}
		anmiatePage(page)
		createTime();
	});

	//圆点点击切换事件
	$('.cic span').click(function(){
		var index = $(this).index();
		page = index;
		clearInterval(timer);
		anmiatePage(page)
		createTime();
	});
});