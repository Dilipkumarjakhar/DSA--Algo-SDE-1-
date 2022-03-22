var str1 =" aaabbbcca";
var str2 ="aaaabbbcca";

console.log(ana(str1, str2))

    function ana(str1, str2) {
        let count={};

    for(var letter of str1){
        count[letter]=(count[letter] ||0)+1;
        // count[c++]=str[i];
        // }
    }
    console.log(count);
    
    for(let items of str2){
        if(!count[items]){
            return false;
        } 
        
        count[items]-=1;
        
    }
    return true;
}
