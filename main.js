const yargs = require("yargs"); // memanggil module npm yargs
const app = require("./app"); // memanggil module pada file app.js

yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    nama: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
    mobile: {
      describe: "phone Number",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email address",
      demandOption: false,
      type: "string",
    },
  },

  handler(argv) {
    app.saveData(argv.nama, argv.mobile, argv.email);
  },
});

yargs.parse();
