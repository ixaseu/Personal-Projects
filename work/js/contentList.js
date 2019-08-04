var goods = [
    {
        "id": "01",
        "title": "追光 女式轻雅透气运动鞋",
        "img": "../images/1.png",
        "price": "￥99",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "02",
        "title": "女式领口系带衬衫",
        "img": "../images/2.png",
        "price": "￥199",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "03",
        "title": "20寸 全铝镁合金登机箱",
        "img": "../images/3.png",
        "price": "￥59",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "04",
        "title": "女式小锁扣牛皮双拉链斜挎包",
        "img": "../images/4.png",
        "price": "￥69",
        "p" : "舒适至上，轻雅行装"
    },
    {
        "id": "05",
        "title": "深补水系列 活颜润肌水",
        "img": "../images/5.png",
        "price": "￥79",
        "p" : "舒适至上，轻雅行装"
    },{
        "id": "06",
        "title": "网易智造3D揉捏按摩肩带",
        "img": "../images/6.png",
        "price": "￥89",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "07",
        "title": "双层防风防潮自动展开帐篷",
        "img": "../images/7.png",
        "price": "￥129",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "08",
        "title": "英式早餐红茶 2.2克*10袋",
        "img": "../images/8.png",
        "price": "￥149",
        "p" : "舒适至上，轻雅行装"
    },
    {
        "id": "09",
        "title": "端阳新风 粽子礼盒1.92千克",
        "img": "../images/9.png",
        "price": "￥239",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "10",
        "title": "3D 智能眼镜",
        "img": "../images/10.png",
        "price": "￥219",
        "p" : "舒适至上，轻雅行装"
    },{
        "id": "11",
        "title": "便携鞋子收纳袋",
        "img": "../images/11.png",
        "price": "￥439",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "12",
        "title": "出行 360度可旋转挂钩 2件装",
        "img": "../images/12.png",
        "price": "￥399",
        "p" : "舒适至上，轻雅行装"
    },
    {
        "id": "13",
        "title": "网易智造懒人按摩坐垫",
        "img": "../images/13.png",
        "price": "￥599",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "14",
        "title": "女式休闲棒球服夹克",
        "img": "../images/14.png",
        "price": "￥399",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "15",
        "title": "办公座椅三件套",
        "img": "../images/15.png",
        "price": "￥299",
        "p" : "舒适至上，轻雅行装"
    },{
        "id": "16",
        "title": "女式无缝休闲运动T恤",
        "img": "../images/16.png",
        "price": "￥669",
        "p" : "舒适至上，轻雅行装"
    },
    {
        "id": "17",
        "title": "原素系列实木餐桌",
        "img": "../images/17.png",
        "price": "￥329",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "18",
        "title": "便携多用办公居家披毯",
        "img": "../images/18.png",
        "price": "￥549",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "19",
        "title": "女式全能运动针织长裤",
        "img": "../images/19.png",
        "price": "￥299",
        "p" : "舒适至上，轻雅行装"
    }, {
        "id": "20",
        "title": "儿童网眼运动凉鞋（宽松版）",
        "img": "../images/20.png",
        "price": "￥199",
        "p" : "舒适至上，轻雅行装"
    }
]

    var sList = document.querySelector('#list'),

        goodStr = '';
        for(var i = 0,k = goods.length;i < k;i++){
            goodStr +=`
                <li>
                    <div class="conBox" data-id="${goods[i].id}">
                    <div class="imgDiv"><img src="${goods[i].img}"></div>           
                    <p class="mainTitle">${goods[i].title}</p>
                    <p class="price">${goods[i].price}</p>
                    <p class="mainTitle mainTitle2">${goods[i].p}</p>
                    <a href="##" class="btn">加入购物车</a>
                    </div>
                    </li>
            `
        }
        sList.innerHTML = goodStr;
        var productInfo = {};
        sList.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName == "A" && target.className == "btn"){
                var id = target.parentNode.getAttribute('data-id'),
                    count = productInfo[id];
                    if(!count){
                        count=1;
                    }else{
                        count++;
                    }
                    productInfo[id] = count;
                    setCookie('goods',JSON.stringify(productInfo),30);
            }
            if(target.tagName == "LI" || target.tagName == "IMG" || target.tagName == "P"){
                open('../html/good.html')
            }
        }

//吸顶效果
    var sleftList = document.querySelector('.leftList');
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
    //左侧固定
    if(scrollTop >= 520){
        //更改box的样式。
        // box.style.position = "fixed";
        // box.style.top = "0";
        sleftList.style.cssText = "position:fixed;top:200px;left:0;";
    }else{
        sleftList.style.position = "static";
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
//contentbanner
var 
        sConBanner = document.querySelector('.conBanner'),
        aImg = document.querySelectorAll('.oImgBox img'),
        aSpan = document.querySelectorAll('.oShow span');
    aImg[0].style.opacity = '1';
    aImg[0].style.filter = 'alpha(opacity=100)';
    var count = 0;
    //图片显示
    function imgShow(img){
        for(var i = 0 ; i < aImg.length ; i++){
            aImg[i].style.opacity = 0;
            aImg[i].style.filter = 'alpha(opacity=0)';
        }
        move(img,{'opacity':100});
    }

    //nextImg
    function nextImg(){
        if(count >= aImg.length - 1){
            count = 0;
        }else{
            count++;
        }
        imgShow(aImg[count]);
    }
    //preImg
    function preImg(){
        if(count <= 0){
            count = aImg.length - 1;
        }else{
            count--;
        }
        imgShow(aImg[count]);
    }
    var timer = null;
    function autoPlay(){
        timer = setInterval(function(){
            nextImg();
        },3000)
    }
    
    window.onload = function(){
        autoPlay()
    }
    aSpan[1].onclick = function(){
        nextImg()
    }
    aSpan[0].onclick = function(){
        preImg();
    }
    sConBanner.onmouseout=function(){
        autoPlay();
    }
    sConBanner.onmouseover=function(){
        clearInterval(timer)
    }