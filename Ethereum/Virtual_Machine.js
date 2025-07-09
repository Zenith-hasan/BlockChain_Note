//* The ethereum virtual machine(EVM) operates as a strightforward stack-based execution enviroment that process bytecode instruction to transition the system state form one condition to another.


//* The EVM is Turing-complete, it's operations are constrained by the gas required for executing instruction. 

//* The Ethereum Virtual Machine(EVM) utilizes a 256-bit word size, and it's stack can accomodate up to 1024 element, functioning on a Last In, First Out ( LIFO) principle. It's operates as a completely isolated and sandboxed runtime environment. 

//? Types of Storage - Memory , Storage & Stack 

//? Memory - The first type is referred to as the memory or volatile memory, which functions as a word-addressed byte array.Once a contract completes it's execution, the memory is reset. 

//? Storage - The second type os known as storage,which operates as a key-value store and is permanently recorded on the blockchian.

//? Stack - The EVM functions as a stack-based machine, executing all computations within a data area called the stack. All values held in memory are also stored in the stack.The Stack has a maximum depth of 1024 elements and accommodates a word size of 256 bit's.



