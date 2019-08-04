var goods = [
    {
        "id": "01",
        "title": "追光 女式轻雅透气运动鞋",
        "img": "images/1.png",
        "price": "￥99"
    }, {
        "id": "02",
        "title": "女式领口系带衬衫",
        "img": "images/2.png",
        "price": "￥199"
    }, {
        "id": "03",
        "title": "20寸 全铝镁合金登机箱",
        "img": "images/3.png",
        "price": "￥59"
    }, {
        "id": "04",
        "title": "女式小锁扣牛皮双拉链斜挎包",
        "img": "images/4.png",
        "price": "￥69"
    }
];
var goods1 = [
    {
        "id": "05",
        "title": "深补水系列 活颜润肌水",
        "img": "images/5.png",
        "price": "￥79"
    },{
        "id": "06",
        "title": "网易智造3D揉捏按摩肩带",
        "img": "images/6.png",
        "price": "￥89",
    }, {
        "id": "07",
        "title": "双层防风防潮自动展开帐篷",
        "img": "images/7.png",
        "price": "￥129"
    }, {
        "id": "08",
        "title": "英式早餐红茶 2.2克*10袋",
        "img": "images/8.png",
        "price": "￥149"
    }
]
var goods2 = [
    {
        "id": "09",
        "title": "端阳新风 粽子礼盒1.92千克",
        "img": "images/9.png",
        "price": "￥239",
    }, {
        "id": "10",
        "title": "3D 智能眼镜",
        "img": "images/10.png",
        "price": "￥219"
    },{
        "id": "11",
        "title": "便携鞋子收纳袋",
        "img": "images/11.png",
        "price": "￥439",
    }, {
        "id": "12",
        "title": "出行 360度可旋转挂钩 2件装",
        "img": "images/12.png",
        "price": "￥399"
    }
]
var goods3 = [
    {
        "id": "13",
        "title": "网易智造懒人按摩坐垫",
        "img": "images/13.png",
        "price": "￥599"
    }, {
        "id": "14",
        "title": "女式休闲棒球服夹克",
        "img": "images/14.png",
        "price": "￥399"
    }, {
        "id": "15",
        "title": "办公座椅三件套",
        "img": "images/15.png",
        "price": "￥299"
    },{
        "id": "16",
        "title": "女式无缝休闲运动T恤",
        "img": "images/16.png",
        "price": "￥669"
    }
]
var goods4 = [
    {
        "id": "17",
        "title": "原素系列实木餐桌",
        "img": "images/17.png",
        "price": "￥329"
    }, {
        "id": "18",
        "title": "便携多用办公居家披毯",
        "img": "images/18.png",
        "price": "￥549"
    }, {
        "id": "19",
        "title": "女式全能运动针织长裤",
        "img": "images/19.png",
        "price": "￥299"
    }, {
        "id": "20",
        "title": "儿童网眼运动凉鞋（宽松版）",
        "img": "images/20.png",
        "price": "￥199"
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
                    </div>
                    </li>
            `
        }
        sList.innerHTML = goodStr;

        var sList1 = document.querySelector('#list1'),
        goodStr1 = '';
        for(var i = 0,k = goods1.length;i < k;i++){
            goodStr1 +=`
                <li>
                    <div class="conBox" data-id="${goods1[i].id}">
                    <div class="imgDiv"><img src="${goods1[i].img}"></div>
                    <p class="mainTitle">${goods1[i].title}</p>
                    <p class="price">${goods1[i].price}</p>                    
                    </div>
                    </li>
            `
        }
        sList1.innerHTML = goodStr1;

        var sList2 = document.querySelector('#list2'),
        goodStr2 = '';
        for(var i = 0,k = goods2.length;i < k;i++){
            goodStr2 +=`
                <li>
                    <div class="conBox" data-id="${goods2[i].id}">
                    <div class="imgDiv"><img src="${goods2[i].img}"></div>
                    <p class="mainTitle">${goods2[i].title}</p>
                    <p class="price">${goods2[i].price}</p>                    
                    </div>
                    </li>
            `
        }
        sList2.innerHTML = goodStr2;

        var sList3 = document.querySelector('#list3'),
        goodStr3 = '';
        for(var i = 0,k = goods3.length;i < k;i++){
            goodStr3 +=`
                <li>
                    <div class="conBox" data-id="${goods3[i].id}">
                    <div class="imgDiv"><img src="${goods3[i].img}"></div>
                    <p class="mainTitle">${goods3[i].title}</p>
                    <p class="price">${goods3[i].price}</p>                    
                    </div>
                    </li>
            `
        }
        sList3.innerHTML = goodStr3;

        var sList4 = document.querySelector('#list4'),
        goodStr4 = '';
        for(var i = 0,k = goods4.length;i < k;i++){
            goodStr4 +=`
                <li>
                    <div class="conBox" data-id="${goods4[i].id}">
                    <div class="imgDiv"><img src="${goods4[i].img}"></div>
                    <p class="mainTitle">${goods4[i].title}</p>
                    <p class="price">${goods4[i].price}</p>                    
                    </div>
                    </li>
            `
        }
        sList4.innerHTML = goodStr4;

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
    if(scrollTop >= 650){
        //更改box的样式。
        // box.style.position = "fixed";
        // box.style.top = "0";
        sleftList.style.cssText = "position:fixed;top:60px;left:0;";
    }else{
        sleftList.style.cssText = "position:absolute;left:0;top:650px;";
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
//订阅电子刊
var sFixR1Left = document.querySelector('.fixR1Left'),
    sFixR1 = document.querySelector('.fixR1');

    sFixR1.onmouseover = function(){
        sFixR1Left.style='display:block;';
    }
    sFixR1.onmouseout = function(){
        sFixR1Left.style='display:none;';
    }
    sFixR1Left.onmouseover = function(){
        sFixR1Left.style='display:block;';
    }
    sFixR1Left.onmouseout = function(){
        sFixR1Left.style='display:none;';
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