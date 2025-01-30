let  visitCount  =  0;
function  increaseVisitCount()  {
   visitCount++;
   console.log("访问次数："  +  visitCount);
}
document.addEventListener("DOMContentLoaded",  increaseVisitCount);
