class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

	let root;
	function isBST()
	{
		return isBSTUtil(root, Number.MIN_VALUE,
							Number.MAX_VALUE);
	}
	
	function isBSTUtil(node,min,max)
	{
		if (node == null)
			return true;

		if (node.data < min || node.data > max)
			return false;

		return (isBSTUtil(node.left, min, node.data-1) &&
				isBSTUtil(node.right, node.data+1, max));
	}
	
		root = new Node(2);
		root.left = new Node(1);
		root.right = new Node(3);

		document.write(isBST());