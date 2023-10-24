const fs = require("fs");
const validator = require("validator");

// Membuat folder "data" jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file "contacts.json" jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//saveData
const saveData = (nama, mobile, email) => {
  const contact = { nama, mobile, email }; // Membuat objek "contact" dengan data yang sudah dikumpulkan sebelumnya.

  // validasi email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log("Email is invalid. Please input again!");
      return false;
    }
  }

  // validasi phone number
  if (mobile) {
    if (!validator.isMobilePhone(mobile, "id-ID")) {
      console.log("Phone number is invalid. Please input again!");
      return false;
    }
  }

  const file = fs.readFileSync(dataPath, "utf8"); // Membaca isi file "contacts.json" dan menyimpannya dalam variabel "file".

  const contacts = JSON.parse(file); // Mengurai kontak-kontak yang ada dalam file JSON.

  contacts.push(contact); // Menambahkan kontak baru ke dalam array "contacts".

  fs.writeFileSync(dataPath, JSON.stringify(contacts)); // Menyimpan data yang sudah diperbarui kembali ke file "contacts.json".

  console.log("Terima kasih sudah memasukkan data!"); // Menampilkan pesan terima kasih setelah data berhasil disimpan.
};
module.exports = { saveData };
