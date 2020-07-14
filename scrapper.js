// scrapping data from https://emojipedia.org/
// saving the <ul> element as global variable temp1

out = [];

temp1.querySelectorAll("li").forEach(li => {
    let emoji = li.firstElementChild.childNodes[0].textContent.trim();
    let emojiName = li.firstElementChild.childNodes[1].textContent.trim();
    out.push({emoji: emoji, name: emojiName})
});

console.log(JSON.stringify(out, null, 2));
