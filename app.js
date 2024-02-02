const db = require("./db/connection");
const axios = require("axios");

const createClient = () => {
  axios
    .get("https://randomuser.me/api/")
    .then((response) => {
      const { name } = response.data.results[0];
      const sql = `INSERT INTO clients (name,last_name, created_at) VALUES ('${name.first}','${name.last}', '2024-02-01 19:07:41')`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Cliente creado!");
        /*const sql = `INSERT INTO logs (description, time_stamp) VALUES ('Cliente creado', NOW())`;
                db.query(sql, (err, result) => {
                    if (err) throw err;
                    console.log('Log creado!');
                });*/
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

//setInterval(createClient, 5000);

const createPet = () => {
  const types = ["dog", "cat", "bird", "fish", "reptile"];
  const breeds = [
    "labrador",
    "bulldog",
    "poodle",
    "siamese",
    "persian",
    "parrot",
    "goldfish",
    "iguana",
  ];
  let names = ["Marlo", "Micket", "Brownie", "Ruggerita", "Pulguita", "Camila"];
  const type = types[Math.floor(Math.random() * types.length)];
  const breed = breeds[Math.floor(Math.random() * breeds.length)];
  const namesPets = names[Math.floor(Math.random() * names.length)];
  let date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const sql = `INSERT INTO pets (name, type, breed, owner_id, created_at) VALUES ('${namesPets}','${type}','${breed}', 1, '${date}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Mascota creada!");
  });
};
setInterval(createPet, 5000);
