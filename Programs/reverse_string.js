function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2) return str;

    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems;i >= 0; i--){
        backwards.push(str[i]);
    }
    return backwards.join('');
}

function reverse2(str){
    //check for valid input as above function
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse('Maansi'))
console.log(reverse2('Maansi'))
console.log(reverse3('Maansi'))