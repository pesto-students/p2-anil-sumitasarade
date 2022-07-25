class Queue{
	
    constructor()
    {
        this.s1 = [];
        this.s2 = [];
    }
    
    enqueue(x)
    {
        while (this.s1.length != 0)
        {
            this.s2.push(this.s1.pop());
        }
    
        this.s1.push(x);
    
        while (this.s2.length != 0)
        {
            this.s1.push(this.s2.pop());
        }
    }
    
    dequeue()
    {
    
        if (this.s1.length == 0)
        {
            document.write("Q is Empty");
        }
    
        let x = this.s1[this.s1.length - 1];
        this.s1.pop();
        return x;
    }
    }
    
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(1);
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    q.enqueue(4);
    q.enqueue(2);
    
    document.write(q.dequeue());
    document.write(q.dequeue());
    

    
    