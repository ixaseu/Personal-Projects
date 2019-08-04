//注册页面

//注册功能
function Register(){
    this.oBox = document.querySelector('.box');
    this.init();
}
Register.prototype = {
    init : function(){
        this.identify();
        this.eventBind();
        
    },
//用ajax获取数据，和用户输入的用户名和密码做比对    
    getDate : function(){    
        var uname = document.querySelector('.uname');
        var upwd = document.querySelector('.upwd');
        axios({
            method : 'get',
            url : 'http://localhost/php/work/php/register.php',
            data : {
                uname : uname.value,
                upwd : upwd.value
            }
        }).then(function(data){            
            if(data.state == '0'){//接收到的数据{state: "0", info: "账号存在,请重新注册"}
                alert(data.info);
            }else{                //注册成功
                alert(data.info);
                //切换到登陆窗口
                location.href = 'http://localhost/php/work/html/login.html'
            }
        }).catch(function(info){
            console.log(info);
        })
    },
    identify : function(){
        this.sSpan = document.querySelector('span');
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

new Register();