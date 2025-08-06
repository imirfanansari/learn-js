// // // // // // // // // // let a = 10; //outside
// // // // // // // // // // {
// // // // // // // // // //     let a = 20; //inside
// // // // // // // // // //     console.log("inside",a);
// // // // // // // // // // }

// // // // // // // // // // console.log("outside", a);


// // // // // // // // //     // let a = 15;
// // // // // // // // //     // let b = a;
// // // // // // // // //     // // a = a15;
    
// // // // // // // // // let number = 151215161516212n;
// // // // // // // // // number+5n;


// // // // // // // // //  concadenation
// // // // // // // // let a = "5"+ 5 ;

// // // // // // // // console.log("concatenation", a);
// // // // // // // let a = 2;
// // // // // // // let b = 3;
// // // // // // //  console.log(a**b);




// // // // // // let a = 10;
// // // // // // let b = 40;

// // // // // // if (a>5 && b<30) {
// // // // // //     console.log("A");

// // // // // // else{
// // // // // //     console.log("b");
// // // // // // }
// // // // // // a


// // // // // let a = 5;
// // // // // a++;
// // // // // console.log(a); 

// // // // // let b = 6;
// // // // // b--;
// // // // // console.log(b); 

// // // // // let c = 10;
// // // // // c--;
// // // // // c;
// // // // // console.log(c--);
// // // // // console.log(c);

// // // // // let d = 4;
// // // // // console.log(++d);
// // // // // console.log(d++);
// // // // // console.log(d);

// // // // // write a function getgrade (score) that take a student's marks (0 to 100)
// // // // // return the grade based on the logic .

// // // // // 90-100 = A
// // // // // 80-89 = B
// // // // // 70-79 = C
// // // // // 60-69 = D
// // // // // 0-59 = F

// // // // function getgrade(score) {
// // // //     if (score >=90 && score <= 100) return "A";
// // // //     if (score >=80 && score <=89) return "B";
// // // //     if (score >=70 && score <=79) return "c";
// // // //     if (score >=60 && score <=69) return "D";
// // // //     if (score >=50 && score <=59) return "E";
// // // //     if (score >=0 && score <=32) return "Fail";

// // // // }
// // // //  console.log(getgrade(56));



// // // // for loop

    
// // // for( let A = 1;  A<101;  A++) {
// // //     console.log(A);
// // // }
// // // let i= 1;
// // // // while (i< 32) {
// // // //     // code
// // // //     console.log(i);
// // // //     i++;

    
// // // // }

// // // // for loop using with continue statement.
// // // for(let i = 1; i<201; i++)
// // // {
// // //     if(i===35){
// // //         continue;
// // //     }
// // //     console.log(i);
// // // }

// // // // brack statement.


// // // for( i=1; i<100; i++){
// // //     if(i===65){
// // //         break;
// // //     }
// // //     console.log(i);
// // // }

// // // // print 1 to 10 using for loop.

// // // for(i=1; i<11; i++){
// // //     console.log(i);
// // // }

// // // // print 10 to 1 using for  loop.

// // // for(let i = 10; i > 0; i--){
// // //     console.log(i);
// // // }

// // // // print 10 to 1 using while  loop.
// // // // {
// // // // let i =10;
// // // // while(i>0){
// // // //     console.log(i);
// // // //     i--;
// // // // }
// // // // }

// // // // write even number 1 to 20.


// // // for(let i = 1; i < 21; i++){
// // //     if(i % 2 ===0) {
// // //     console.log(i);
// // //     }
// // // }

// // // // print odd number using while loop. 1 to 15.
// // // // write a table of 5.

// // // for( let i = 1; i <= 10; i++ ){
// // //     console.log(5*i);
// // // }


// // // //  for loop

// // // console.table("irfan");
// // console.table(["irfan , shourya"] ["Name"]);


// // // question given by shourya.
// // // write your name "irfan" every word print in a new line
// // // let name = "irfan";
// // // for(let i = 0; i < name.length; i++){
// // //     console.log(name[i]);
// // //  }

// // // let name = "irfan";
// // // for(let i = 0; i< name.length; i++){
// // //     console.log(name[i]);
// // // }



// // // write a name"shourya"every word write a new line.

// // // let name = "shourya";
// // // for(let i = 0; i < name.length; i++){
// // //     console.log(name[i]);
// // // }

// // // write a name irfan every word print a new line with a privious word

// // let name = "Imran";
// // for(let i = 0; i < name.length; i++){
// //     console.log(name[i]);
    
// // }


// // {
// //     let name = "Anwar";
// //     for(i = 0; i < name.length; i++){
// //         console.log(name[i]);
// //     }
// // }
// // // this is my first program

// for(let i = 5; i <= 10; i++){
//     console.log(i);
//     continue;
// }


// for(let i = 1; i<=200; i++){
//     console.log(i);
// }

// write a program 1 to 50 between divisible by 3. print all number 

// for(let i = 1; i<51; i++){
//     if(i % 3===0){
//         console.log(i);

//     }
// } 

// for( let i = 1; i < 100; i++){
//     if(i % 2 ===0){
//         console.log(i);
//  }
// }

// create a ask box number 1 to even and odd.

// let val = prompt("give a number")
//     for(let i = 1; i <= val; i++){
//         if(i % 2 === 0){
//          console.log(`${i} is even number`);
//     }
//     else{
//         console.log(`${i} is odd number`);
//     }
// }


// let val = prompt("given number")
// for( let i = 1; i<= val; i++){
//     if(i % 3=== 1){
//         console.log(`${i} is odd`);
//     }
//     else{
//         console.log(`${i} is even`);
//     }
// } 


// divisible by 3 and 5. upto 1 to 100.

// for(let i = 1; i<=100; i++){
//     if(i % 3===0 && i % 5===0){
//         console.log(i);
//     }
// }

//  i have a number 1 to 100. total divisible by 7  loop stop. not print divisible number.

// for(let i = 1; i <=100; i++){

//     if(i % 7=== 0){
//         break;
//     }
//     console.log(i);
// }

// print divisible numbmer.

// for(let i = 1; i<= 100; i++){
//     console.log(i);
//     if(i % 7===0){
//         break;
//     }
// }

// skip every divisible of 3. upto 1 to 20.

// for(let i = 1; i<= 20; i++){
//     if(i % 3 ===0) continue;
//     console.log(i);
// }

// print odd number.
// let count = 0;
// for(let i = 1; i<=100; i++){
//     if(i % 2 ===1){
//         count++;
//         console.log(i);
//     }
//     if(count === 5) break;
//     }

// print odd number 1 to 50.

// for(let i = 1; i <=50; i++){
//     if(i%2 ===1){
//         console.log(i);
//     }
// }

// Function 
// function dance (v1){
//     console.log(`${v1}are dancing`);
// }
// dance("elephants");
// dance("dogs");
// dance("hens");
// dance("dancer");

// adding two number using function.

// function add(v1, v2){
//     console.log(v1 + v2);  
// }
// add(1 , 6);
// add(5 , 9);

function sub (v1 , v2){
    console.log(v1 - v2);
}
sub(7 , 3);


