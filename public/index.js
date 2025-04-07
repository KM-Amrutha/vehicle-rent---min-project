"use strict";
//Infer Types
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// const userName = 'amrutha';
// let userDetail :{name:string,age:number} ={
// name:'amrtha',
// age:27
// }
//interface
// type um und interface pole type keyword vechit interface nu pakaram
// interface Details{
//     name:string ,
//     age:number| string,
//     place:string,
//     getName?: () => void
// }
// let userDetails: Details={
//     name:'amrutha',
//     age:27,
//     place:'mundur',
//     getName() {
//        console.log(this.name)
//     }
// }
// // union |  optional ?(type check cheyyum)
// let adminDetails : Details ={
//     name:'rock',
//     age:'50',
//     place:'london',
// }
//named types
// type statusType = 'reosle' |'reject' |'pending'
// let response:statusType = 'reosle'
////////////////////////////////////////////////////function overloading////////////////////////////////////////////////////
// function greet(name: string): string;
// function greet(name: string, age: number): string;
// // Single Implementation
// function greet(name: string, age?: number): string {
//     if (age !== undefined) {
//         return `Hello ${name}, you are ${age} years old.`;
//     }
//     return `Hello ${name}.`;
// }
// // Usage
// console.log(greet("Amrutha"));    
// console.log(greet("Amrutha", 27));    
///////////////////////////////////////////////generics///////////////////////////////
// function getage<T>(age:T):T{
//     return age
// }
// getage<number>(5)
// function merge<T, U>(first: T, second: U): [T, U] {
//     return [first, second];
// }
// let pair = merge<number, string>(1, "TypeScript");
// console.log(pair);  // [1, "TypeScript"]
///////////////////////////////////////kure type oru function il pass cheyyunath////////////////
// type userDetails ={
//     name:string;
//     age:number
// }
// type adminDetails = userDetails & { 
//     role: string
// }
// interface userDetails {
//     name:string;
//     age:number
// }
//  interface adminDetails extends userDetails  { 
//     role: string
// }
// // equal aaanenkil 
// interface adminDetails extends userDetails{}
// const userDetails :userDetails = {
//     name:'debug media',
//     age:20
// }
// const adminDetails :adminDetails ={
//     name:'brototype',
//     age : 22,
//     role:'admin'
// }
// function getdetails<T>(details:T) : T{
//     return details
// }
// let userValue = getdetails<userDetails>(userDetails)
// let adminValue = getdetails<adminDetails>(adminDetails)
//////////////////////////////////////////ENUM//////////////////////////////
// type statusType = 'pending' | 'completed' | 'rejected'; like union pole
// enum statusType {
//     PENDING,
//     COMPLETED,
//     REJECTED
// }
// // const enum kodtha object pole allandu kittum ath not good ennanu paryunathu.
// // enum StatusType  {
// //     PENDING = 'pending' or 1(1 koudtha 1 il ninnu start aavum otherwise 0 il ninnu) , 
// //     COMPLETED = 'completed',
// //     REJECTED = 'rejected'
// // }
// function getStatus(orderId : string, status: statusType){
//     console.log(orderId, '=', status )
// }
// getStatus('2131243214',statusType.PENDING )
// ////////////////////////////////////////////////AS CONST//////////////////////////
// type casting
// let gudname = 'debugmedia'  as const
// gudname ='debugmedia'  mathre kodukkan pattu..  const aaya karanum, as ittu string, null number enth type venel kodukkam 
/////////////////////////////////////////////////// keyof  or typeOf//////////////////////////////////////////////////////////
//  const statuscode ={
//     pending : 'pending',
//     resolved:'resolved',
//     rejected :'rejected'
//  } as const;
//  function getStatus (objectid: string, status: keyof typeof statuscode){
//     console.log(objectid, '==', statuscode[status] )
//  }
//  getStatus('143445',"rejected")
///////////////////////////////////////////////utility types////////////////////////////////
// utility types okke bascically generic tye aanu means <> ith
// type Users ={
//  username:string,
//  age:number
// }
//   const userDetails : Readonly<Users> = {
//    username: 'debug',
//    age:20
//   }
//   const userDetails : required<Users> = {
//    username: 'debug',
//    age:20
//   }
//   const userDetails : pick<Users, name> = {
//    username: 'debug',
//   
//   }
// const userDetails :Omit <Users, "username">={
//   age:20
// }
// const userDetails : Partial<Users> = {
//    username: 'baby'
// }
// userDetails.age = 30 
//////////////////////////////////////exclude////////////////////////////////////////
// pick omit use union il work aavula so use exclude
// type statusType = 'pending' | 'resolved'| 'rejected'
// const Status : Exclude<statusType,'rejected'> = 'resolved'
///////////////////////////////////record///////////////////////////////////////////
// keys and values any type varuna case il record use cheyyam
// api nu roupad data varum.. so key value ariyatha case il use aavum Record
// type food= {
//   kfc: string,
//   chicken : string,
//    payasam:string
// }
// type food = Record <string, any>;
// another way
// type food ={
//   [index:string] : any,
//   [index2:number]: any
// }
// const foodtype : food={
// //   abc: 'dfgsdfgsdf',
// // xyz : 'sfasgwhrey'
// dasgfsg: 'gfsgfsgfg',
// 1454155: 'fdgagaf'
// }
// any/never/void/null
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Enter a character: ", (char: string) => {
//   console.log(`You entered: ${char}`);
//   rl.close();
// });
// import * as readline from 'readline';
// const rl = readline.createInterface({
//    input: process.stdin,
//     output: process.stdout 
//   });
// rl.question('Enter limit: ', (lim) => {
//   rl.question('Enter elements: ', (input) => {
//     let count = 0;
//     let arr = input.split(' ');
//     for (let i = 0; i < Number(lim); i++) {
//       if (Number(arr[i]) % 2 === 0) count++;
//     }
//     console.log('Even count:', count);
//     rl.close();
//   });
// });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a string: ', (str) => {
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        console.log('It is palindrome.');
    }
    else {
        console.log(' Not  palindrome.');
    }
    rl.close();
});
