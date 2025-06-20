/* 變更頂部跑馬燈區塊圖片(依照設備寬度變化觸發變更) */

// 變更圖片
function changeImageSource(screen_size) {
    index_slideshow_01=document.getElementById('index_slideshow_01');
    index_slideshow_02=document.getElementById('index_slideshow_02');
    index_slideshow_03=document.getElementById('index_slideshow_03');
    philosophy_slideshow_01=document.getElementById('philosophy_slideshow_01');
    story_slideshow_01=document.getElementById('story_slideshow_01');

    if (screen_size.matches) { 

        if(index_slideshow_01){
            index_slideshow_01.setAttribute("style", "background-image: url('./assets/img/photos/hot_product_02.jpg');");
            index_slideshow_02.setAttribute("style", "background-image: url('./assets/img/photos/hot_product_01.jpg');");
            index_slideshow_03.setAttribute("style", "background-image: url('./assets/img/photos/hot_product_03.jpg');");
        }
        
        if(philosophy_slideshow_01){
            philosophy_slideshow_01.setAttribute("style", "background-image: url('./assets/img/photos/philosophy_slideshow_01_mobile.png');");
        }
        
        if(story_slideshow_01){
            story_slideshow_01.setAttribute("style", "background-image: url('./assets/img/photos/story_slideshow_01_mobile.png');");
        }

    } else {
     
        if(index_slideshow_01){
            index_slideshow_01.setAttribute("style", "background-image: url('./assets/img/photos/diy_bg7.jpg');");
            index_slideshow_02.setAttribute("style", "background-image: url('./assets/img/photos/diy_bg8.jpg');");
            index_slideshow_03.setAttribute("style", "background-image: url('./assets/img/photos/diy_bg9.jpg');");
        }
        
        if(philosophy_slideshow_01){
            philosophy_slideshow_01.setAttribute("style", "background-image: url('./assets/img/photos/philosophy_slideshow_01.png');");
        }
        
        if(story_slideshow_01){
            story_slideshow_01.setAttribute("style", "background-image: url('./assets/img/photos/story_slideshow_01.png');");
        }
    }
  }
  
// 設置觸發條件
var screen_size= window.matchMedia("screen and (max-width: 768px)");

console.log(screen_size)
// 監聽事件 (change)
screen_size.addEventListener("change", function() {
    changeImageSource(screen_size);

});

window.onload = () => {
    changeImageSource(screen_size);
}

/*/ 變更頂部跑馬燈區塊圖片(依照設備寬度變化觸發變更) */


