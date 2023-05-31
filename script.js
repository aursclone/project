// Fungsi untuk melakukan login
function login() {
  // Mendapatkan username dan password dari pengguna (misalnya melalui form input)
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Periksa apakah username adalah "admin" dan password sesuai
  if (username === "admin" && password === "admin123") {
    // Redirect ke halaman administrator
    window.location.href = "https://google.com";
  } else {
    // Tampilkan pesan kesalahan jika login gagal
    alert("Username atau password salah. Silakan coba lagi.");
  }
}

// Mencari tombol submit dan menambahkan event listener
var submitButton = document.getElementById("submitted");
submitButton.addEventListener("click", login);
