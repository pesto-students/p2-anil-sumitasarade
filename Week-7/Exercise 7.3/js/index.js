
	var head; // head of list

	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	function detectLoop(h) {
	    
		var s = new Set();
		while (h != null) {
			if (s.has(h))
				return true;
			s.add(h);

			h = h.next;
		}

		return false;
	}

	function push(new_data) {
        var new_node = new Node(new_data);
	    new_node.next = head;
	    head = new_node;
	}
	
    var value = [1,3,4];
		for (i = value.length-1; i >= 0; i --)								   //Time Complexity = O(n)
			push(value[i]);													//Space Complexity = O(n)

	head.next.next.next = head;
		document.write(detectLoop(head));


    //Time Complexity = O(n)
    //Space Complexity = O(n)
