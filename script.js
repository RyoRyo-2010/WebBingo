var numberList = [];
var useSpeech = false;
function furu() {
    const hanni = { min: Number(document.querySelector("#saisyou").value), max: Number(document.querySelector("#saidai").value) };
    if(hanni.max < hanni.min) {
        alert("最大値と最小値がおかしいっす");
        return;
    }
    if(hanni.min < 0 || hanni.min > 99) {
        alert("最小値がおかしいっす");
        return;
    }
    if(hanni.max < 0 || hanni.max > 99) {
        alert("最大値がおかしいっす");
        return;
    }
    let ok = false;
    if (hanni.max - hanni.min + 1 == numberList.length) {
        const dasita = "もう番号はすべて出したっす";
        alert(dasita);
        let button = document.querySelector("#furu");
        button.disabled = true;
        button.innerHTML = dasita;
        return;
    }
    while (!ok) {
        let rand = (Math.random() * (hanni.max + 1 - hanni.min) / 1.0) + hanni.min;
        rand = Math.floor(rand);
        if (numberList.indexOf(rand) == -1) {
            ok = true;
            numberList.push(rand);
            showNumbers();
            document.querySelector("#now").innerHTML = rand;
        }
    }


}

window.onload = (event) => {
    document.querySelector("#furu").addEventListener("click", furu);
    document.querySelector("#search").addEventListener("click",search);
};

function showNumbers() {
    const numbers = numberList.join(", ");
    document.querySelector("#numbers").innerHTML = numbers;
}

function search() {
    let s = prompt("検索する数字を打ってくれっす");
    if(numberList.indexOf(Number(s)) != -1) {
        alert("見つかったっす！");
    }else{
        alert("見つからなかったっす...");
    }
}