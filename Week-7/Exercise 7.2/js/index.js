var head;

	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}
	
	function rotate(k) {
		if (k == 0)
			return;

		var current = head;

		var count = 1;
		while (count < k && current != null) {
			current = current.next;
			count++;
		}

		if (current == null)
			return;

		var kthNode = current;

		while (current.next != null)
			current = current.next;

		current.next = head;
		head = kthNode.next;
		kthNode.next = null;
	}

	function push(new_data) {
        var new_node = new Node(new_data);
	    new_node.next = head;
	    head = new_node;
	}

	function display() {
    var temp = head;
		while (temp != null) {
			document.write(temp.data + " ");
			temp = temp.next;
		}

	}

	var value = [2, 4, 7, 8, 9];
	const k=3;
		for (i = value.length-1; i >= 0; i --)						    //Time Complexity = O(n)
			push(value[i]);

		document.write("Given list");
		display();

		rotate(k);

		document.write("Rotated Linked List");
		display();


    //Time Complexity = O(n)
    //Space Complexity = O(1)