export default function controllPassword() {
    const state = {
        key: "start"
    }

    btn.addEventListener("click", function(e) {
        let name = document.getElementById('name').value;
        let pass = document.getElementById('pass').value;
        // e.preventDefault();
        if(pass === state.key) {
            document.location.href = "https://alexandr-paleev.github.io/tetris/tetris.html";
        } else {
            alert(`Password incorrect ${name}`);
        }
    });
}
controllPassword();
