function countDown(n) {
    let clock = setInterval(function(){
        n--;
        if(n<=0){
            clearInterval(clock);
            console.log("Done!");}
        else{console.log(n);}
        },1000)}
    
   
countDown(4)

function randomGame(){
    let num;
    let count = 0;
    let clock = setInterval(function(){
        num = Math.random();
        count++;
        if(num > .75){
            clearInterval(clock);
            if(count = 1){
                console.log("It took 1 try")
            }
            else if(count > 1){
                console.log("It took " + count + " tries");
            }
        }

    }, 1000)
}
