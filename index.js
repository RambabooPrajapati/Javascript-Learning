
// Array flat() meathod

    // const arr = [3, 3, 0, [0, 5], [5, 8], 8];
    // console.log(arr); // output: [ 3, 3, 0, [ 0, 5 ], [ 5, 8, [ 5, 6 ] ], 8 ]

    // const arr = [3, 3, 0, [0, 5], [5, 8], 8];
    // console.log(arr.flat()); //output: [ 3, 3, 0, 0, 5, 5, 8]

    // const arr = [3, 3, 0, [0, 5], [5, 8, [5, 6],], 8];
    // console.log(arr.flat(2));

    // const multiArray = [3, 5, 6, [3, 5, 3, [3, 2]], 4];
    // console.log(multiArray.flat(3));
    // console.log(multiArray.flat(Infinity)); // we can use Infinity key word

// Print 1 to 100 number using for loop
    // let number = [];
    // for (let i = 1; i <= 100; i++) {
    //     number.push(i);
    // }
    // for (let i = 1; i <= 100; i++) {
    //     number.push(i*2);
    // }
    // console.log(number);


// Print 1 to 100 number without using for loop

    // const counting = []
    // function count(start, end) {
    //     counting.push(start);
    //     if (start < end) {
    //         count(start + 1, end);
    //     }
    //     return start;
    // }
    // console.log("before calling count function ==", counting)
    // count(1, 100);
    // console.log("after calling count function ==", counting)


// how to some of array values
  
    //   const array = [1,2,3,4,5,6,7,8,9,];
    //   const sum = array.reduce((a,value)=>{
    //     return a + value;
    //   });
    //   const sum = array.reduce((a,value)=>{
    //     return a + value;
    //   }, 10);
    //   console.log("Sum of array values", sum)

