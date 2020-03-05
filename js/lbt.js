/*
* @Author: ASUS飞行堡垒
* @Date:   2019-11-29 11:44:23
* @Last Modified by:   ASUS飞行堡垒
* @Last Modified time: 2019-11-29 13:25:07
*/
		// js_guan_ceteon 大盒子ID
		// guan_ceteon_mian_block 图片ID
		// slider_cterl 左右ID
		var js_guan_ceteon = document.getElementsByTagName("div")[0];
		var slider = document.getElementById("guan_ceteon_mian_block");
		var imgs = slider.children;
		var slider_cterl = document.getElementById("slider_cterl");
		//根据图片的数量创建焦点
		for (var i = 0; i < imgs.length; i++) {
			var span = document.createElement("span");
			span.className = "guan_ctrl_con";
			//给元素设置class名
			span.innerHTML = imgs.length-i;
	 		slider_cterl.insertBefore(span,slider_cterl.children[1]);
		 };

		var spans = slider_cterl.children;
		spans[1].setAttribute("class","guan_ctrl_con current");

		var scrollWidth = js_guan_ceteon.clientWidth;
		for (var i = 1; i < imgs.length; i++) {
			imgs[i].style.left = scrollWidth + "px";
		}

		var iNow = 0;
		for (var k in spans) {
			spans[k].onclick = function(){
				if (this.className == "guan_ctrl_prnv") {
					animate(imgs[iNow], {left: scrollWidth});
					--iNow < 0 ? iNow = imgs.length -1: iNow;
					imgs[iNow].style.left = -scrollWidth + "px";
					animate(imgs[iNow], {left:0});
					setSquare();
				}
				else if(this.className == "guan_ctrl_next"){
					animate(imgs[iNow],{left: -scrollWidth});
					++iNow > imgs.length -1 ?  iNow = 0 : iNow;
		        imgs[iNow].style.left = scrollWidth + "px";  // 立马执行  快速走到右侧
		        animate(imgs[iNow],{left: 0}); // 下一张走的 0 的位置  慢慢走过来
		        setSquare();
				}
				 else {
                // alert("您点击了下面的span");
                // 我们首先要知道我们点击是第几张图片  --- 获得当前的索引号
                // alert(this.innerHTML);
                var that = this.innerHTML - 1;
                // console.log(typeof that);
                if(that > iNow) {
                      // 做法等同于 右侧按钮
                    animate(imgs[iNow],{left: -scrollWidth});  // 当前的这张慢慢的走出去 左侧
                    imgs[that].style.left = scrollWidth + "px"; // 点击的那个索引号 快速走到右侧  310
                }
                else if(that < iNow) {
                    // 做法等同于 左侧按钮
                    animate(imgs[iNow],{left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;  // 给当前的索引号
                animate(imgs[iNow],{left: 0});
                /*比如 已经播放到 第4张    我点击了 第2张   把 2 给  inow
                下一次播放，应该播放第3张*/
               // animate(imgs[iNow],{left: 0});
                setSquare();
            }
			}
		} 