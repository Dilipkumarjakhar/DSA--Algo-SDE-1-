// using recursion--------
// T.C=O(2^N) ,S.C=O(1);
// Method's------------------
// 1].------------
// let n=10;
// let x=fect(n);
// console.log(x);

// function fect(n){
//     if(n==0||n==2 || n==1){
//         return n;
//     }
//  return fect(n-1)+fect(n-2);
// }

// we can try to reduce T.C by O(logn) using Dp
// 2].------------
// let n=6;
// let way=[];
//     way[0]=1;
//     way[1]=1;
//     // way[2]=1;

//     for(var i=2;i<=n;i++){
//         way[i]=way[i-1]+way[i-2];
//     }
//     // console.log(way);
//     console.log(way[n]);


    // 3].--------------------

    let n=6;
    let dp=[];
    for(var i=0;i<=n;i++){
        dp[i]=-1;
    }
    console.log('dp:', dp)
let x=way(n,dp)
console.log('x:', x)
console.log('way:', dp[n])

    function way(n,dp){
        if(n<=1){
            return 1;
        }
        if(dp[n]!==-1){
            return dp[n];
        }
        else if(dp[n]==-1){
            let res=way(n-1,dp)+way(n-2,dp)
             dp[n]=res;
             return dp[n]; 
        }
    }
    console.log('dp:', dp)