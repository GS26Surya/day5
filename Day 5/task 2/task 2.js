
const obj = {
    name:"Surya",
    age: 24,
    place: "NTP",
    Favanime : "One-Piece",
    favplace : "Tripura",
    favanimal : "Cat",
  }



  
  console.log("..............For  loop ....................")

  let objkeys = Object.keys(obj)

  for(i=0;i<objkeys.length;i++){
    console.log(`${objkeys[i]} :${obj[objkeys[i]]}`)
  }


console.log("..............For In loop ....................")

  for (key in obj) {
console.log(` ${key} : ${obj[key]}`)
      
    }


 console.log("..............Foreach loop ....................")

 objkeys.forEach((key)=>console.log(`${key} : ${obj[key]}`))


 
 console.log("..............Forof loop ....................")

 for ( k of objkeys) {
  console.log(`${k} : ${obj[k]}`)

  
 }








