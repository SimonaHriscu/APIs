const DictionaryClient = require("./dictionary-client");
const myKey = require("../../config");
const API_KEY = myKey;

function formatData(data) {
    const result = `${data} `;
  }

module.exports = async function dictionary(word_id){
    const client = new DictionaryClient(API_KEY);
    // console.log(client);
    const currentData = await client.getDictionary(word_id);
   // console.log(currentData);
    return formatData(currentData);
}