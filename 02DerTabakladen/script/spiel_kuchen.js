/* game logic*/
var counter = 0;
var skey = "theCakeIsALie";

$('#brunnen').on('click', function game(el) {
    console.log(el);
    
    var sessionStorage = readSessionStorage(skey);
    var element = el;

    if(!sessionStorage) {
        alert("hiihi");
        setSessionStorage(skey, counter);
    }else{
        if(element.currentTarget.classList.contains('cake')){
            counter++;
            updateCounter();
        }else{
            if(element.currentTarget.classList.contains("cigarette")){
                $('#test').css("display", "none");
                gameLost();
            }else{
                alert("nope!!");
            }
        }
    }

    alert("test");
});

/* generate entity to display counter */

$('#test #counter').text(counter);

/* read sessionstorage */
function readSessionStorage(key) {
    if(!sessionStorage.getItem(key)){
        return false;
    }
    else {return true};
}
/* set sessionstorage */
function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

/* update counter */
function updateCounter() {
    $('#test #counter').text(counter);
}

function gameLost() {
    $('#lost').css("display", "initial");
    setTimeout(
        function(){
             alert("Hello"); 
            },3000);
}