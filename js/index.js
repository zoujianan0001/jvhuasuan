(function(win,doc){
			function change(){
				doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px'
			}
			change();
			win.addEventListener('resize',change,false)
		})(window,document)
		//加图片
		window.addEventListener('DOMContentLoaded',function(){
			$.each($('.nav a'),function(index,item){
				$(item).css('backgroundImage','url(img/nav'+(index+1)+'.png)');
			})
			$.each($('.content img'),function(index,item){
				$(item).attr('src','img/content-'+(index+1)+'.png');
			})
			 var swiper = new Swiper('.swiper-container', {
        	pagination: '.swiper-pagination',
       	 paginationClickable: true
   		 });
		},false)