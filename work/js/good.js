function ChangeImg(){
    this.osImgBox = document.querySelector('.sImgBox');
    this.osImgBoxLi = document.querySelectorAll('.sImgBox li');
    this.aSpan = document.querySelectorAll('.btnBox span');
    this.distance = this.osImgBoxLi[0].offsetWidth;
    this.oShowImg = document.querySelector('.show>img');
    this.oGlass = document.querySelector('.glass');
    this.oGlassImg = this.oGlass.querySelector('img');
    this.oShow = document.querySelector('.show');
    this.oShade = document.querySelector('.shade');
    this.sBtn = document.querySelector('.goTop');
    this.sNav = document.querySelector('.nav');
    this.sGdReduce = document.querySelector('.gdReduce');
    this.sGdAdd = document.querySelector('.gdAdd');
    this.sConInput = document.querySelector('.conR5 input');
    this.count = 0;
    this.init()
}
ChangeImg.prototype = {
    init : function(){
        //整合模块
        this.osImgBox.style.width = this.distance * this.osImgBoxLi.length + 'px';     
        this.bindEvent();
        this.xiding();
        this.inputNum();
        this.shopping();
    },
    toImg : function(){                 //图片的移动方法。
        move(this.osImgBox,{'left': -this.distance * this.count});
    },
    nextImg : function(){
        if(this.count >=  this.osImgBoxLi.length - 4){
            this.count = this.osImgBoxLi.length - 4;
        }else{
            this.count++;
        }
    },
    preImg : function(){
        if(this.count <= 0){
            this.count = 0
        }else{
            this.count--;
        }
    },
    changeSrc : function(smallSrc){
        this.oShowImg.src = smallSrc;
        this.oGlassImg.src = smallSrc;
    },
    show : function(){
        this.oShade.style.display = 'block'
        this.oGlass.style.display = 'block'
    },
    hide : function(){
        this.oShade.style.display = 'none'
        this.oGlass.style.display = 'none'
    },
    bigGlass : function(e,left,top){
        e = e || window.event;
        var
            l = e.clientX - left - this.oShade.offsetWidth / 2,
            t = e.pageY - top - this.oShade.offsetHeight / 2;
        l = l < 0 ? 0 : (l > 200 ? 200 : l);
        t = t < 0 ? 0 : (t > 200 ? 200 : t);
        this.oShade.style.left = l + 'px';
        this.oShade.style.top = t + 'px';
        this.bigImgMove(l,t);
    },
    bigImgMove : function(l,t){
        this.oGlassImg.style.left = -2 * l + 'px'; 
        this.oGlassImg.style.top = -2 * t + 'px'; 
    },
    goTop : function(){
        //返回顶部           
                //获取当前滚动条的高度
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //设置滚动条减小
                    //设置滚动条的高度
                    document.documentElement.scrollTop = document.body.scrollTop = 0;           
    },
    xiding : function(){
        var _this = this;   
        window.onscroll = function(){
        //检测滚动条的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        if(scrollTop >= 176){
            //更改box的样式。
            // box.style.position = "fixed";
            // box.style.top = "0";
            _this.sNav.style.cssText = "position:fixed;top:0;";
        }else{
            _this.sNav.style.position = "static";
        }
    }
    },
    inputNum : function(){
        var _this = this;
        this.sGdReduce.onclick = function(){       
            if(_this.sConInput.value < 2){
                _this.sConInput.value =1;
            }else{
                _this.sConInput.value -=1;
            }  
            }
            this.sGdAdd.onclick = function(){
                var a = Number(_this.sConInput.value);           
                a +=1;
                _this.sConInput.value = a;
            }
    },
    shopping :function(){
        var productInfo = {},
        sContentRight = document.querySelector('.contentRight'),
        sGdNum = document.querySelector('.gdNum');
        sContentRight.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName == "DIV" && target.className == "addCar"){
                var id = "02";
                    
                    productInfo[id] = sGdNum.value;
                    setCookie('goods',JSON.stringify(productInfo),30);
            }
            
        }
    },
    bindEvent : function(){
        var _this = this;
        this.aSpan[1].onclick = function(){
            _this.nextImg();
            _this.toImg();
        }
        this.aSpan[0].onclick = function(){
            _this.preImg()
            _this.toImg();
        }
        this.sBtn.onclick = function(){
            _this.goTop();
        }
        for(var i = 0 ; i < this.osImgBoxLi.length ; i++){
            var _this = this;
            this.osImgBoxLi[i].onmouseover = function(){
                //鼠标滑过更改大图的地址（获取每一个的src）
                _this.changeSrc(this.firstElementChild.src);
            }
        }
        this.oShow.onmouseover = function(){
            _this.show();
        }
        this.oShow.onmouseout = function(){
            _this.hide();
        }

        this.oShow.onmousemove = function(e){
            _this.bigGlass(e,this.offsetLeft,this.offsetTop);
        }

    }

}



new ChangeImg();