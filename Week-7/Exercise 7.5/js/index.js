
function printNextGreaterElement(arr, n)
{
	var s = [];

	s.push(arr[0]);

	for (var i = 1; i < n; i++)				  //Time Complexity = O(n)
	{

		if (s.length == 0) {
			s.push(arr[i]);					    //Space Complexity = O(n)
			continue;
		}

		while (s.length ==0 == false
			&& s[s.length-1] < arr[i])
		{
			document.write(arr[i]);
			s.pop();
		}

		s.push(arr[i]);
	}

	while (s.length !=0) {
		document.write(-1);
		s.pop();
	}
}

var arr = [1, 3, 2, 4];
var n = arr.length;
printNextGreaterElement(arr, n);

    //Time Complexity = O(n)
    //Space Complexity = O(n)