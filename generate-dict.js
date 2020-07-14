const fs = require('fs');


let Activity = JSON.parse(fs.readFileSync('./data/Activity.json'));     //1
let Flags = JSON.parse(fs.readFileSync('./data/Flags.json'));           //2
let Food = JSON.parse(fs.readFileSync('./data/Food.json'));             //3
let Nature = JSON.parse(fs.readFileSync('./data/Nature.json'));         //4
let Objects = JSON.parse(fs.readFileSync('./data/Objects.json'));       //5
let People = JSON.parse(fs.readFileSync('./data/People.json'));         //6
let Symbols = JSON.parse(fs.readFileSync('./data/Symbols.json'));       //7
let Travel = JSON.parse(fs.readFileSync('./data/Travel.json'));         //8


let out = {};

function addToDictionary(arr){
    arr.forEach(element => {
        out[element.emoji] = element.name;
    });
}

addToDictionary(Activity)
addToDictionary(Flags)
addToDictionary(Food)
addToDictionary(Nature)
addToDictionary(Objects)
addToDictionary(People)
addToDictionary(Symbols)
addToDictionary(Travel)

//Total 1741 emojies

fs.writeFileSync('emoji-names.json', JSON.stringify(out, null, 2));
