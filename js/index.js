// console.log(anime);

/*
    页面向下滚动导航栏变为不透明
*/
let topbar = document.querySelector('#home-topbar')
let tpInput = document.querySelector('#tb-middle-search input')
window.addEventListener('scroll',()=>{
    if(window.scrollY){
        topbar.style.backgroundColor="rgba(240,240,240,1)"
        tpInput.style.backgroundColor="rgba(220,220,220,1)"
    }else{
        topbar.removeAttribute('style')
        tpInput.removeAttribute('style')
    }   
    
})

/*
切换页面分区按钮dom的class变更
*/
let tbs = document.querySelectorAll('#tb-middle-subregion p')
tbs.forEach((item)=>{
   
    item.addEventListener('click',(e)=>{
        
        if([...e.target.classList].includes('subregion-active')){
            
            return
        }
        tbs.forEach(item => 
            item.classList.remove('subregion-active')
            )
        e.target.classList.add('subregion-active')
    })
})

/*
切换新番时间按钮dom的class变更
*/
let ds = document.querySelectorAll('#time-days p')
ds.forEach((item)=>{
   
    item.addEventListener('click',(e)=>{
        
        if([...e.target.classList].includes('days-active')){
            
            return
        }
        ds.forEach(item => item.classList.remove('days-active'))
        e.target.classList.add('days-active')
    })
})
/**
 * 获取用户操作系统
 * @returns platform:string
 */
function detectOS() {
    
    return navigator.userAgent
}
let os = detectOS()
// alert(os)

// if(detectOS().match(/Win|Linux|MAC/i)){
    
// }else{

// }
