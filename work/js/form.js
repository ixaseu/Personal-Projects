var mySwiper1 = new Swiper ('#swiper1', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
  }) 


var mySwiper2 = new Swiper('#swiper2',{
      slidesPerView : 3,
      spaceBetween : 20,
      //spaceBetween : '10%',按container的百分比

    navigation: {
      nextEl: '#swiper_n2',
      prevEl: '#swiper_p2',
    },
    autoplay:true,
  });
//鼠标覆盖停止自动切换
mySwiper2.el.onmouseover = function(){
  mySwiper2.autoplay.stop();
}
//鼠标移除开启自动切换
mySwiper2.el.onmouseout = function(){
mySwiper2.autoplay.start();
}

var mySwiper3 = new Swiper('#swiper3',{
    effect : 'fade',
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '#pagination3',
      clickable :true,
    },
    loop: true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '#swiper_n3',
      prevEl: '#swiper_p3',
    }, 
})
//鼠标覆盖停止自动切换
    mySwiper3.el.onmouseover = function(){
      mySwiper3.autoplay.stop();
}
//鼠标移除开启自动切换
mySwiper3.el.onmouseout = function(){
  mySwiper3.autoplay.start();
}

var mySwiper4 = new Swiper('#swiper4',{
  effect : 'fade',
  autoplay:true,
  // 如果需要分页器
  pagination: {
    el: '#pagination4',
    clickable :true,
  },
  loop: true,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '#swiper_n4',
    prevEl: '#swiper_p4',
  }, 
})
//鼠标覆盖停止自动切换
  mySwiper4.el.onmouseover = function(){
    mySwiper4.autoplay.stop();
}
//鼠标移除开启自动切换
mySwiper4.el.onmouseout = function(){
mySwiper4.autoplay.start();
}


var mySwiper5 = new Swiper('#swiper5',{
  effect : 'fade',
  autoplay:true,
  // 如果需要分页器
  pagination: {
    el: '#pagination5',
    clickable :true,
  },
  loop: true,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '#swiper_n5',
    prevEl: '#swiper_p5',
  }, 
})
//鼠标覆盖停止自动切换
  mySwiper5.el.onmouseover = function(){
    mySwiper5.autoplay.stop();
}
//鼠标移除开启自动切换
mySwiper5.el.onmouseout = function(){
mySwiper5.autoplay.start();
}

var mySwiper6 = new Swiper('#swiper6',{
  effect : 'fade',
  autoplay:true,
  // 如果需要分页器
  pagination: {
    el: '#pagination6',
    clickable :true,
  },
  loop: true,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '#swiper_n6',
    prevEl: '#swiper_p6',
  }, 
})
//鼠标覆盖停止自动切换
  mySwiper6.el.onmouseover = function(){
    mySwiper6.autoplay.stop();
}
//鼠标移除开启自动切换
mySwiper6.el.onmouseout = function(){
mySwiper6.autoplay.start();
}

