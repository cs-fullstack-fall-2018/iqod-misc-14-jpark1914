var array = [[4, 5, 6], [2, 3, 4, 5], [7, 5, 3, 4, 1]];
var count = [];
var count2 = [];
var sum = 0;
var minus = 0;

for(let i=0; i<array.length; i++){
    // console.log(array[i]);
    for(let j=0; j<array[i].length; j++){
        //console.log(array[i][j]);
        sum += parseInt(array[i][j]);
    }

    count.push(sum);
    console.log(sum);
}

for(let i=0; i<array.length; i++){
    for(let j=array[i].length-1; j>0; j--){
        minus = parseInt(array[i][]);
    }
    count.push(minus);
    console.log(minus);
}