function maxSubArraySum(a)  
{  
    let current_sum = 0, maximum_sum = 0;  
   
    for (let i = 0; i < a.length; i++)                      //Time Complexity: O(n)
    {  
        current_sum = current_sum + a[i];  
        if (current_sum > maximum_sum)  
           maximum_sum = current_sum;  
   
        if (current_sum< 0)  
           current_sum = 0;  
    }  
    return maximum_sum;  
}  

let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];  
console.log(maxSubArraySum(a));