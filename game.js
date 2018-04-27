var health = 100;
var target = "Meowth";
var hits = 0;

function quickAttack() {
    health--
    //alert(health);
    hits++
    drawUpdate()
}
function thunderBolt() {
    health = (health-5)
    //alert(health);
    hits++
    drawUpdate()
}
function ironTail() {
    health = (health-10)
    //alert(health);
    hits++
    drawUpdate()
}
function drawUpdate() {

    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits;


}

drawUpdate()
