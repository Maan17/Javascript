function firstRecurringCharacter(input){
    let map = {};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]]){
            return input[i]
        }
        else{
            map[input[i]] = i
        }
    }
}