var goods = [
    {
        "id": "01",
        "title": "商品商品商品商品商品商品",
        "price": "￥230",
        "img": "../images/1.png"
    }, {
        "id": "02",
        "title": "商品商品商品商品商品商品",
        "price": "￥360",
        "img": "../images/2.png"
    }, {
        "id": "03",
        "title": "商品商品商品商品商品商品",
        "price": "￥110",
        "img": "../images/3.png"
    }, {
        "id": "04",
        "title": "商品商品商品商品商品商品",
        "price": "￥666",
        "img": "../images/4.png"
    }, {
        "id": "05",
        "title": "商品商品商品商品商品商品",
        "price": "￥530",
        "img": "../images/5.png"
    }, {
        "id": "06",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/6.png"
    }, {
        "id": "07",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/7.png"
    }, {
        "id": "08",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/8.png"
    }, {
        "id": "09",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/9.png"
    }, {
        "id": "10",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/10.png"
    }, {
        "id": "11",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/11.png"
    }, {
        "id": "12",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/12.png"
    }, {
        "id": "13",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/13.png"
    }, {
        "id": "14",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/14.png"
    }, {
        "id": "15",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/15.png"
    }, {
        "id": "16",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/16.png"
    }, {
        "id": "17",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/17.png"
    }, {
        "id": "18",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/18.png"
    }, {
        "id": "19",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/19.png"
    }, {
        "id": "20",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/20.png"
    }, {
        "id": "21",
        "title": "商品商品商品商品商品商品",
        "price": "￥99",
        "img": "../images/21.png"
    }
];

    var sList =document.querySelector('#list'),
        strCookie = getCookie('goods'),
        objCookie = JSON.parse(strCookie),
        sDel = document.querySelector('.del'),
        sList = document.getElementById('list'),
        sReduce = document.querySelector('.reduce'),
        sAdd = document.querySelector('.add'),
        sNum = document.querySelector('.num'),
        sPriceSum = document.querySelector('.priceSum'),
        sShopCar = document.querySelector('.shopCar .shopCar1');

        
        var str = '';
        for(key in objCookie){
        for(var i = 0,k = goods.length; i < k; i++){
            if(key == goods[i].id){
                str +=`
                <tr data-id="${goods[i].id}">
                <td><img src="${goods[i].img}" class="smallPic"></td>
                <td class="pic">${goods[i].price}</td>
                <td>
                    <button class="reduce">-</button>
                    <input type="text" value="${objCookie[key]}" class="num">
                    <button class="add">+</button>
                </td>
                <td class="priceSum">￥${goods[i].price.substr(1) * objCookie[key]}</td>
                <td class="del"><a href="#">清空</a></td>
            </tr> 
                `
                
            }
        }
    }
    sList.innerHTML += str;
    sShopCar.innerHTML = Object.keys(objCookie).length;
    var good = {};
    sList.onclick = function(e){       
                    e = e || window.event;
                    var k = e.target || e.srcElement;
                    
                    if(k.tagName == "A"){
                        var id = k.parentNode.parentNode.getAttribute('data-id');
                        good[id] = 0;
                            k.parentNode.parentNode.remove();
                            setCookie('goods',JSON.stringify(good),-1);
                            location.reload();
                    }  
            }

            
            
    //吸顶效果
    var sNav = document.querySelector('.nav');
    var sBtn = document.querySelector('.goTop');   
    window.onscroll = function(){
    //检测滚动条的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop >= 176){
        //更改box的样式。
        // box.style.position = "fixed";
        // box.style.top = "0";
        sNav.style.cssText = "position:fixed;top:0;";
    }else{
        sNav.style.position = "static";
    }
    
    }
//返回顶部
function goTop(){
    //获取当前滚动条的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //设置滚动条减小
        //设置滚动条的高度
        document.documentElement.scrollTop = document.body.scrollTop = 0;

}
sBtn.onclick = function(){
    goTop();
}
