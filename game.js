// var health = 100;
// var target = "Meowth";
// var hits = 0;

var me = new Target('Meowth')

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
    for (var i = 0; i < me.items.length; i++) {
        //alias the thing the loop is currently accessing
        var item = me.items[i];
        totalMods += item.modifier;
    }
    return totalMods
    //ends function
    //call funtion = runs through function
}

function giveItem(itemName){
    me.items.push(backpackItems[itemName])
    //where you are pushing.push(where it is at)
}

function Item(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

function quickAttack() {
    me.health -= 1 * addMods()
    //alert(health);
    me.hits++
    drawUpdate()
}
function thunderBolt() {
    me.health = (me.health-5)
    //alert(health);
    me.hits++
    drawUpdate()
}
function ironTail() {
    me.health = (me.health-10)
    //alert(health);
    me.hits++
    drawUpdate()
}
function drawUpdate() {

    document.getElementById("health").innerText = me.health;
    document.getElementById("hits").innerText = me.hits;


}

drawUpdate()
