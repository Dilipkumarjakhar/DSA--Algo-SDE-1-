
let s="dilipsdpssdililil";

let data={};

for(var i=0;i<s.length;i++){
    let char=s[i];
    if(data[char]==undefined){
        data[char]=1;
    }else{
        let prev=data[char];
        data[char]=prev+1;
    }
}
for(k in data){
    console.log(k+"-"+data[k]);

}