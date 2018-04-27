// var health = 100;
// var target = "Meowth";
// var hits = 0;

var meowth = new Target('Meowth')
var backpack = {
    paralyzePotion: new Item("Paralyze Potion", 5, "It is Paralyzed.")
    

}

function Target(name){
    this.name = name;
    this.health = 100;
    this.hits = 0;
}

function Item(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

function quickAttack() {
    meowth.health--
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
