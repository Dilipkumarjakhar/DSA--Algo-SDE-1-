let str='aaabbccddeffsx';


RunLengthEncoding(str)
function RunLengthEncoding(str){
    let n=str.length;

    for(var i=0;i<n;i++){
        let count=1;
        while(i<n-1 && str[i]==str[i+1]){
            count++;
            i++;
        
        }
        console.log(str[i],":",count)
    }
}

//  <-- you also write like this it is also working ->

        // function RunLengthEncoding(str){
        //     let n=str.length;
        
        //     for(var i=0;i<n;i++){
        //         let count=1;
                    // while(i<n-1){
                    //     if(str[i]==str[i+1]){
                    //     count++;
                    //     i++;
                    // }else break;
                    // }
                // console.log(str[i],":",count)
         // }
         // }