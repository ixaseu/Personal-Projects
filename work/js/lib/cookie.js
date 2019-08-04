//设置cookie
function setCookie(cName,cValue,expires){
    var d = new Date();
    d.setDate(d.getDate() + expires);
    document.cookie = cName + '=' + cValue + ';path=/;expires=' + d.toGMTString();
}

//获取cookie
function getCookie(cName){
    var cookieStr = document.cookie;
    var cookieArr = cookieStr.split('; ');
    for(var i = 0,k = cookieArr.length;i < k; i++){
        var item = cookieArr[i].split('=');
        if(item[0] == cName){
            return item[1];
        }
    }
}

//删除cookie
function removeCookie(cName){
    setCookie(cName,null,-1);
}