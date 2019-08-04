   $(function(){

        function Lubotu(){
            this.imgBox = $('.imgBox');
            this.lSpan = $('.box span').eq(0);
            this.nSpan = $('.box span').eq(1);
            this.distance = $('.imgBox img').width();
            this.box = $('.box');
            this.radiusBox = $('.radiusBox');
            this.count = 0;
            this.timer = null;
            this.init();
        }

        Lubotu.prototype = {
            init : function(){
                $('.imgBox img').first().clone().appendTo($('.imgBox'));
                this.imgBox.css('width',this.distance * $('.imgBox img').length);
                this.img = $('.imgBox img');
                this.autoPlay();
                this.addLi();
                this.eventBind();
            },
            imgMove : function(){
                this.imgBox.stop(true).animate({
                    left : - this.distance * this.count
                })
            },
            last : function(){
                if(this.count <= 0){
                    this.imgBox.css('left',- this.distance * (this.img.length-1));
                    this.count = this.img.length - 2;
                }else{
                    this.count --;
                }
                this.imgMove();
                this.changeStyle();
            },
            next : function(){
                if(this.count >= this.img.length -1){
                    this.imgBox.css('left',0);
                    this.count = 1;
                }else{
                    this.count ++;
                }
                this.imgMove();
                this.changeStyle();
        },
        autoPlay : function(){
            var _this = this;
            this.timer = setInterval(function(){
                _this.next();
            },4000)
        },
        addLi : function(){
            for(i = 0; i < $('.imgBox img').length - 1;i++){
                var createLi = $('<li></li>');
                this.radiusBox.append(createLi);
            }
            $('.radiusBox li:first').addClass('active');
        },
        changeStyle : function(){
            $('.radiusBox li').eq(this.count > $('.imgBox img').length - 2 ? 0 : this.count).addClass('active').siblings().removeClass('active');
        },
        radiusChange : function(index){
            $('.radiusBox li').eq(index).addClass('active').siblings().removeClass('active');
        },
        eventBind : function(){
            var _this = this;
            this.lSpan.click(function(){
                _this.last();
            })
            this.nSpan.click(function(){
                _this.next();
            })
            this.box.mouseout(function(){
                _this.autoPlay();
            })
            this.box.mouseover(function(){
                clearInterval(_this.timer)
            })
            $('.radiusBox li').mouseover(function(){
                var index = $(this).index();
                _this.radiusChange(index);
                _this.count = index;
                _this.imgMove();
            })
        }
        
        }
        new Lubotu();
    })
