function sortNumbers(a,arr_size)
{
    
    let low = 0;
    let high = arr_size - 1;
    let mid = 0;
    let temp = 0;
    while (mid <= high)
    {
        if(a[mid] == 0)
        {
            temp = a[low];
            a[low] = a[mid];
            a[mid] = temp;
            low++;
            mid++;
        }
        else if(a[mid] == 1)
        {
            mid++;
        }
        else
        {
            temp = a[mid];
            a[mid] = a[high];
            a[high] = temp;
            high--;
        }
    }
}


let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];

let arr_size = arr.length;
sortNumbers(arr, arr_size);
for (let i = 0; i < arr_size; i++)
{
    console.log(arr[i] + " ");
}

