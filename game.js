var health = 100;

function quickAttack() {
    health--
    //alert(health);
    drawUpdate()
}
function thunderBolt() {
    health--
    //alert(health);
    drawUpdate()
}

function drawUpdate() {

    document.getElementById("health").innerText = health;

}

drawUpdate()
