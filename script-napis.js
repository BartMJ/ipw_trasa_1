
const letterArr = document.querySelectorAll('.letter')
console.log(letterArr)
function unfade() {
  
    var op = 0.1;  // initial opacity
    // letterArr.style.display = 'block';
    var timer = setInterval(function () {
        
        if (op >= 1){
            clearInterval(timer);
        }
        
        for(var i = 0; i < 34; i++) {
            
            letterArr[i].style.opacity = op;
            letterArr[i].style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
            console.log(letterArr[i])
        }
        
         
    }, 20);
}


let myitems = [1, 2, 3];

function delay() {
    return new Promise() { (resolve) => setTimeout(resolve, 3000)
 }
 
 /* you actual processing function */
 async function itemRunner(item){
     await delay();
     console.log(item);
 }/* here is how you can wait in loop */
 async function processTasks(array) {
   array.forEach(async (item) => {
     await itemRunner(item);
   })
   console.log('Completed!!!');
 }
 processTasks(myitems);