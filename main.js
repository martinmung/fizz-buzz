var index = 1

do{
    if(index % 3 == 0 && index % 5 == 0){
        console.log("Fizz Buzz")
    }
    else if(index % 3 == 0){
        console.log("Fizz")
    }else if(index % 5 == 0){
        console.log("Buzz")
    }else (console.log(index))

    index++
}while(index <=100)