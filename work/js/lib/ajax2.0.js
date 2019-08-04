function axios(options){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest() || ActiveXObject("Microsoft,XMLHTTP");
        var packData = '';
        for(key in options.data){
            packData += '&' + key + '=' + options.data[key]; 
        }
        if(options.method == 'get'){
            xhr.open('get',options.url + '?' + packData.slice(1));
            xhr.send();           
        }else{
            xhr.open('post',options.url);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(packData.slie(1));
        }
        xhr.onreadystatechange= function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(JSON.parse(xhr.responseText));
            }
            setTimeout(function(){
                if(xhr.readyState != 4 || xhr.status != 200){
                    var objState = {
                        state : xhr.readtState,
                        status : xhr.status
                    }
                    reject(objState);
                }
            },3000)
        }

    })
}