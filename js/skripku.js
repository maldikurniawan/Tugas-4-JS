function login() {
    let frm = window.document.getElementById("formulir");
    let user = frm.username.value;
    let pw = frm.password.value;
    if (user == "mimin" && pw == "mimin123") {
        alert("Selamat Datang Mimin, Anda Administrator");
    }
    else if (user == "budi" && pw == "budi123") {
        alert("Selamat Datang Budi, Anda Operator");
    }
    else {
        alert("Maaf Anda Gagal Login");
    }

}

function kosongin() {
    let frm = window.document.getElementById("formulir");
    frm.username.value = "";
}

function kosongin2() {
    let frm = window.document.getElementById("formulir");
    frm.password.value = "";
}

function reg() {
    alert("Maaf, Fungsi Ini Belum Tersedia");
}

function forpas() {
    alert("Maaf, Fungsi Ini Belum Tersedia");
}