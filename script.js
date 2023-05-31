// Fungsi untuk melakukan log
  // Mendapatkan username dan password dari pengguna (misalnya melalui form input)
  var isDisable = false
  var lonceng = document.getElementById("logo0");
  
document.getElementById("submitted").addEventListener("click", function() {
  var username = document.getElementById("username0").value;
  var password = document.getElementById("password0").value;
  var container = document.getElementById("notif0");
  
  
  

  // Periksa apakah username adalah "admin" dan password sesuai
  if (username === "ownernyasiapa" && password === "pakenanya") {
    // Redirect ke halaman administrator
    window.location.href = "aman.html";
  } else if(username === "" || password === "") {
    if (!isDisable) {
    isDisable = true
    container.style.top = '10px'
    lonceng.style.animation = 'shake 0.7s 0.6s 2'
document.getElementById("notif-text").innerHTML = "Username / Password ga boleh kosong<br> gblk"

  setTimeout(function() {
    isDisable = false
    lonceng.style.animation = 'none'
    container.style.top = '-100%';
  }, 3000);
  } 
  } else {
    // Tampilkan pesan kesalahan jika login gagal
    if (!isDisable) {
      isDisable = true
      lonceng.style.animation = 'shake 0.7s 0.6s 2'
    container.style.top = '10px'
    document.getElementById("notif-text").innerHTML ="Udah di kasih tau masih aja salah gblk";
    setTimeout(function() {
      isDisable = false
      lonceng.style.animation = 'none'
    container.style.top = '-100%';
  }, 3000);
  }}

})
// Mencari tombol submit dan menambahkan event listener

var freerobux = document.getElementById("robux");
freerobux.addEventListener('click', (event) => {
  var container = document.getElementById("notif0");

      event.preventDefault();
      if(!isDisable) {
        isDisable = true
lonceng.style.animation = 'shake 0.7s 0.6s 2'
      container.style.top = '10px'
document.getElementById("notif-text").innerHTML ="Mawu aja lu ketipu buduh🤓";
setTimeout(function() {
  isDisable = false
lonceng.style.animation = 'none'
    container.style.top = '-100%';
  }, 3000);
      }
})