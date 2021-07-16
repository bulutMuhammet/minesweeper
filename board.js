var limit=9;

var mode = 10;



var generateMine = () =>{
    var mineArray = []
    var i=0;
    while(i<mode){
        var x = Math.floor(Math.random()*limit)
        var y = Math.floor(Math.random()*limit)

        var xy = `${x},${y}`

        if(mineArray.includes(xy)){
            continue;
        }else{
            mineArray.push(xy)
            i++;
        }

        
        
    }
    return mineArray
}
var mines = generateMine()

for(var i=0;i<limit;i++){
    document.write(`<ul class="row" data-index="${i}">`)
        for(var j=0;j<limit;j++){
            var xy = `${j},${i}`
            if(mines.includes(xy)){
                document.write(`<li class="box closed-li" data-x='${j}' data-y='${i}' data-coord='${j},${i}'>
                                <span class="closed">
                                    X
                                </span>
                            </li>`)
            }else {
                document.write(`<li class="box closed-li" data-x='${j}' data-y='${i}' data-coord='${j},${i}'><span class="closed">`)
                
                var x_limit = [j-1 , j+1] // min, max
                var y_limit = [i-1 , i+1] // min, max

                var neigbours = []

                for(var x=x_limit[0] ; x < x_limit[1]+1 ; x++){
                    for(var y=y_limit[0] ; y < y_limit[1]+1 ; y++){
                        if(y>-1 && x>-1 && y<9 && x<9 ){
                            if (`${x},${y}` != `${j},${i}`){
                                neigbours.push(`${x},${y}`)
                            }
                        }
                    }
                }
                var len=0;
                neigbours.forEach(element => {
                    if(mines.includes(element)){
                        len++;
                    }
                });
                
                if(len > 0){
                    document.write(`${len}`)
                }else{
                    document.write('&nbsp')
                }
                
                document.write(`</span></li>`)
            }
            
        }
    document.write('</ul>')
}




var i=0;
var j=0;



