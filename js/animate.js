/**
 * Created by andy on 2015/11/23.
 */
 /**
 * Created by andy on 2015/11/23.
 */
function setSquare() {
       //  清除所有的span current   留下 满足需要的拿一个
        for(var i=1;i<spans.length-1;i++){   //  8个span   我们要 1-6  不要 7  索引号
            spans[i].className = "guan_ctrl_con";
        }
        spans[iNow+1].className = "guan_ctrl_con current";  // 记住 + 1
    }
// 多个属性运动框架  添加回调函数
function animate(obj,json,fn) {  // 给谁    json
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;  // 用来判断是否停止定时器   一定写到遍历的外面
        for(var attr in json){   // attr  属性     json[attr]  值
            //开始遍历 json
            // 计算步长    用 target 位置 减去当前的位置  除以 10
            // console.log(attr);
            var current = 0;
            if(attr == "opacity")
            {
                current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
                console.log(current);
            }
            else
            {
                current = parseInt(getStyle(obj,attr)); // 数值
            }
            // console.log(current);
            // 目标位置就是  属性值
            var step = ( json[attr] - current) / 10;  // 步长  用目标位置 - 现在的位置 / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //判断透明度
            if(attr == "opacity")  // 判断用户有没有输入 opacity
            {
                if("opacity" in obj.style)  // 判断 我们浏览器是否支持opacity
                {
                    // obj.style.opacity
                    obj.style.opacity = (current + step) /100;
                }
                else
                {  // obj.style.filter = alpha(opacity = 30)
                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";

                }
            }
            else if(attr == "zIndex")
            {
                obj.style.zIndex = json[attr];
            }
            else
            {
                obj.style[attr] = current  + step + "px" ;
            }

            if(current != json[attr])  // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
            {
                flag =  false;
            }
        }
        if(flag)  // 用于判断定时器的条件
        {
            clearInterval(obj.timer);
            //alert("ok了");
            if(fn)   // 很简单   当定时器停止了。 动画就结束了  如果有回调，就应该执行回调
            {
                fn(); // 函数名 +  （）  调用函数  执行函数
            }
        }
    },10)
}
function getStyle(obj,attr) {  //  谁的      那个属性
    if(obj.currentStyle)  // ie 等
    {
        return obj.currentStyle[attr];  // 返回传递过来的某个属性
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
    }
}
    // 自动轮播
    function autoplay(){
        animate(imgs[iNow],{left: -scrollWidth});
                // 当前的那个图片 慢慢的走到 -scrollWidth 位置
                // 变成1   先 ++   ++iNow  先自加  后 运算
                ++iNow > imgs.length -1 ?  iNow = 0 : iNow;
                imgs[iNow].style.left = scrollWidth + "px";  // 立马执行  快速走到右侧
                animate(imgs[iNow],{left: 0}); // 下一张走的 0 的位置  慢慢走过来
                setSquare();
                }
   var timer =  setInterval(autoplay, 4000);

    js_guan_ceteon.onmouseover=function(){
        clearInterval(timer);
    }
    js_guan_ceteon.onmouseout=function(){
        timer = setInterval(autoplay, 4000);
    }