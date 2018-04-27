var health = 100;

function quickAttack(){
    health --
    alert(health);
    
    document.getElementById("health").innerText = quickAttack;
}
quickAttack()