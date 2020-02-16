export default function checkPass() {
    let inp = document.getElementById("oldPass");
    inp.oninput = function() {
        let controllWord = inp.value.toLowerCase();
        if(controllWord === "start") {
            document.getElementById("oldPass").style.backgroundColor = "lightgreen";
        } else if(controllWord !== "start") {
            document.getElementById("oldPass").style.backgroundColor = "#f3f3f3";
        }
    };
}

checkPass();

    