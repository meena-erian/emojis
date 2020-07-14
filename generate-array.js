/**
 * This code merges all emojies into one array where emojies are the 
 *  keys and values are the names of each emoji
 */

const fs = require('fs');

let Activity = JSON.parse(fs.readFileSync('./data/Activity.json'));     //1
let Flags = JSON.parse(fs.readFileSync('./data/Flags.json'));           //2
let Food = JSON.parse(fs.readFileSync('./data/Food.json'));             //3
let Nature = JSON.parse(fs.readFileSync('./data/Nature.json'));         //4
let Objects = JSON.parse(fs.readFileSync('./data/Objects.json'));       //5
let People = JSON.parse(fs.readFileSync('./data/People.json'));         //6
let Symbols = JSON.parse(fs.readFileSync('./data/Symbols.json'));       //7
let Travel = JSON.parse(fs.readFileSync('./data/Travel.json'));         //8

let out = [];

out = out.concat(Activity, Flags, Food, Nature, Objects, People, Symbols, Travel)

//Total 1741 emojies

fs.writeFileSync('all.json', JSON.stringify(out, null, 2));
