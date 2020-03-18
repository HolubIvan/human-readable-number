module.exports = function toReadable (number) {

    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
  
    let num = number.toString();

    let word = '';
    let hundred = '';

    if(num == 0){
        return 'zero';
    }

    if(num.length === 3){
       hundred = numbers[num[0]] + ' hundred';
       num = num.slice(1);
        
    }

    if(numbers[num]){
       word = hundred + ' ' + numbers[num];
    } else{
        if(num == '00'){
            return hundred;
        }

        let second = (numbers[num[0]]) ? numbers[num[0]*10] : '';
        let third = (numbers[num[1]]);

        word = (second != '') ? (hundred + ' ' + second + ' ' + third) : (hundred + ' ' + third); 
    }
    return word.trim();
    
}
