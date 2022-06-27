
function areBracketsBalanced(expr)
{

	let stack = [];
	for(let i = 0; i < expr.length; i++)				    //Time Complexity = O(n)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x);									    //Space Complexity = O(n)
			continue;
		}

		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	return (stack.length == 0);
}

let expr = "{([])}";
document.write(areBracketsBalanced(expr));




    //Time Complexity = O(n)
    //Space Complexity = O(n)
