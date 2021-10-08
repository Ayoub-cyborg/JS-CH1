let name;
let tab = [];

while (true)
{
    name = prompt("Enter your name");
    
    if (name === 'exit') break

    tab.push(name)
}

console.log(tab);