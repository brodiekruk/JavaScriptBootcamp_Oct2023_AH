let name1 = prompt("Name 1")
let name2 = prompt("Name 2")
let name3 = prompt("Name 3")

length1 = name1.length
length2 = name2.length
length3 = name3.length

switch(true) {
    case length1 > length2 && length1 > length3:
        console.log(`${name1} is the longest name.`)
        break;

    case length2 > length1 && length2 > length3:
        console.log(`${name2} is the longest name.`)
        break;

    case length3 > length2 && length3 > length1:
        console.log(`${name3} is the longest name.`)
        break;
    
    case length1 === length2 && length1 === length3:
        console.log(`All names are the same length.`)
        break;

    case length1 === length2:
        console.log(`${name1} and ${name2} are tied for longest.`)
        break;

    case length2 === length3:
        console.log(`${name2} and ${name3} are tied for longest.`)
        break;

    case length1 === length3:
        console.log(`${name1} and ${name3} are tied for longest.`)
        break;

    default:
        console.log(`Um nice going bozo you broke everything with your silly little names`)
}