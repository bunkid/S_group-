

// function addNumber(n)
// {   
//     return n*(n+1) / 2;
// }


// console.log(addNumber(4));

function fizzbuzz(n)
{   
    let a=[];
    for(i = 1; i <=n ;i++)
    {
        if(i%3==0 && i%5==0)
        {
           a[i] = 'fizzbuzz';
        }else
        if(i%3==0 )
        {
           a[i] = 'fizz';
        }else
        if(i%5==0 )
        {
           a[i] = 'buzz';
        }
        else
        {
            a[i]=i;
        }
    }
    return a;
}

console.log( fizzbuzz(11));
