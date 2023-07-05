class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        if (this.stack.length === 0) {
            console.log('Stack is currently empty.')
            return 
        }

        return this.stack.pop()
    }

    check() {
        console.log(this.stack)
    }
}

const stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”