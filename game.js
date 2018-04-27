// var health = 100;
// var target = "Meowth";
// var hits = 0;

var meowth = new Target('Meowth')

var backpackItems= {
    paralyzePotion: new Item("Paralyze Potion", 0.5, "It cannot move."),
    pokeToy: new Item("Poke Toy", .75, "It is distracted."),
    xAttack: new Item("X Attack", 1, "Increased attack power.")
}

function Target(name){
    this.name = name;
    this.health = 100;
    this.hits = 0;
    this.items= [];

}
function addMods(){
    var totalMods = 1
    for (var i = 0; i < meowth.items.length; i++) {
        //alias the thing the loop is currently accessing
        var item = meowth.items[i];
        totalMods += item.modifier;
    }
    return totalMods
    //ends function
    //call funtion = runs through function
}

function giveItem(itemName){
    meowth.items.push(backpackItems[itemName])
    console.log(meowth.items)
    //where you are pushing.push(where it goes)
}

function Item(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

function quickAttack() {
    meowth.health -= 1 * addMods()
    //alert(health);
    meowth.hits++
    drawUpdate()
}
function thunderBolt() {
    meowth.health = (meowth.health-5)
    //alert(health);
    meowth.hits++
    drawUpdate()
}
function ironTail() {
    meowth.health = (meowth.health-10)
    //alert(health);
    meowth.hits++
    drawUpdate()
}
function drawUpdate() {

    document.getElementById("health").innerText = meowth.health;
    document.getElementById("hits").innerText = meowth.hits;


}

drawUpdate()
