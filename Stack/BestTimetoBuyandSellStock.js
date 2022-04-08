// <-------Best Time to Buy and Sell Stock-------->

// Approachs:

// 1.Broute force
// T.C=O(N^2)
// S.C=O(1)
// let stock=[7,1,3,5,6,2];
// let max=0;
// for(let i=0; i<stock.length; i++){
    //      for(let j=stock.length-1;j>i;j--){
        //             let sum=stock[j]-stock[i];
        //             if(max<sum){
            //                max=sum;
            //                }
            //             }
            //    }
            // console.log(max);
            
            // 2.Optimal
            // T.C=O(N)
            // S.C=O(1)
            let prices=[7,1,3,5,6,2];
            let maxProfit=0
            let minPrice=prices[0];
            for(let i=1; i<prices.length; i++){
                
                let sellPrice=prices[i];
                let profit=sellPrice-minPrice;
                            //1-7//3-1//5-1//6-1//2-1
                 maxProfit=Math.max(maxProfit,profit)
             
                 if(sellPrice<minPrice) minPrice=sellPrice;
                     //1<7         ==m=1
  }
  console.log(maxProfit);