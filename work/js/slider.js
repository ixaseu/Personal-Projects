                var sBtn = document.querySelector(".btn2"),
                sDiv = document.querySelector(".box4"),
                sSec = document.querySelector("section");
            sBtn.onmousedown = function(e){
                e = e || window.event;
                var x = e.offsetX;
                document.onmousemove = function(e){
                e = e || window.event;
                console.log(e);
                preventDefault(e);
                var l = e.clientX - x - sSec.offsetLeft;

                var l = l < 0 ? 0 : (l > 150 ? 150 : l);
                sBtn.style.left = l  + "px";
                sDiv.style.width = l  + "px";   
                if(l >= 150){
                    sDiv.style.background ="rgb(82,204,186)";
                    sDiv.innerHTML = "验证成功";
                    sBtn.onmousedown = null;
                }
                }
            }
            document.onmouseup = function(){
                if(sDiv.offsetWidth < 150){
                    timer = setInterval(function(){
                       sDiv.style.width = sDiv.offsetWidth - 1 +"px";
                       sBtn.style.left =  sBtn.offsetLeft - 1 +"px";
                       if(sDiv.offsetWidth <= 0){
                        clearInterval(timer);
                       }
                    },2)
                }
                document.onmousemove = null;
            }
