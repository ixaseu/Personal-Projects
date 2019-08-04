//登陆页面

function Login(){
    this.oBox = document.querySelector('.box');
    this.init();
}
Login.prototype = {
    init : function(){
        this.eventBind();
        this.identify();
    },
    
    getDate : function(){
        //用ajax把登陆用户名和密码交给后端    
        var uname = document.querySelector('.uname');
        var pwd = document.querySelector('.upwd');
        axios({
            method : 'get',
            url : 'http://localhost/php/work/php/login.php',
            data : {
                uname : uname.value,
                upwd : pwd.value
            }
        }).then(function(data){
            if(data.state == '1'){//登录成功
                alert(data.info);
                location.href = 'http://localhost/php/work/index.html'
            }else{                //密码错误
                alert(data.info);
            }
        }).catch(function(info){//用户名不存在
            console.log(info);
        })
    },
    identify : function(){
        this.sSpan = document.querySelector('.span');
        this.sValue = "";
        for(var i = 0,k = 4; i < k;i++){
            var str = parseInt(Math.random()*10);
            this.sValue += str;
        }
        this.sSpan.innerHTML = this.sValue;
    },
    eventBind : function(){
        var oBtn = document.querySelector('.btn');
        oBtn.addEventListener('click',this.getDate.bind(this));
    }

}
new Login();