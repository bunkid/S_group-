

// function doubleChar(str)
// {
//       let str1="";
      
//        for(let i = 0 ; i < str.length;i++)
//        { 
//           str1 += str[i] + str[i];
//        }
//        return str1;

// }

// console.log(doubleChar("ngu"));

//---------------------------//

let onlineShopping = {
     "bun" : 20,
     "bun1" : 22,
     "bun2" : 23,
     "bun3" : 24,
     "bun4" : 25,
     "bun5" : 26,

}

 let result = (onlineShopping) => 
 {    
      var x= 0;
      for( key in onlineShopping)
      {
         x += onlineShopping[key];
      }
      return x;
 }

 console.log(result(onlineShopping));