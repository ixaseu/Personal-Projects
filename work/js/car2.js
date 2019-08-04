var sList =document.querySelector('#list'),
        strCookie = getCookie('goods'),
        objCookie = JSON.parse(strCookie),
        sDel = document.querySelector('.del'),
        sList = document.getElementById('list'),
        sReduce = document.querySelectorAll('.reduce'),
        sAdd = document.querySelectorAll('.add'),
        sNum = document.querySelectorAll('.num'),
        sPic = document.querySelectorAll('.pic');
        sPriceSum = document.querySelectorAll('.priceSum');


        for(let i = 0,k = sReduce.length;i < k; i++){
            sReduce[i].onclick = function(){       
            if(sNum[i].value < 2){
                sNum[i].value =1;
            }else{
                sNum[i].value -=1;
            }                                     
            sPriceSum[i].innerHTML ='￥' + Number(sPic[i].innerHTML.substr(1)) * sNum[i].value;                                                  
            
            sList.onclick = function(e){       
                e = e || window.event;
                var k = e.target || e.srcElement;                    
                if(k.tagName == "BUTTON"){
                    var id = k.parentNode.parentNode.getAttribute('data-id');
                    good[id] = sNum[i].value;
                        setCookie('goods',JSON.stringify(good),30);
                        location.reload();
                }  
        }    
        }
            sAdd[i].onclick = function(){
                var a = Number(sNum[i].value);           
                a +=1;
                sNum[i].value = a; 
                sPriceSum[i].innerHTML ='￥' + Number(sPic[i].innerHTML.substr(1)) * sNum[i].value;                                          
                
                sList.onclick = function(e){       
                    e = e || window.event;
                    var k = e.target || e.srcElement;                    
                    if(k.tagName == "BUTTON"){
                        var id = k.parentNode.parentNode.getAttribute('data-id');
                        good[id] = sNum[i].value;
                            setCookie('goods',JSON.stringify(good),30);
                            location.reload();
                    }  
            }
            }
        
        }
