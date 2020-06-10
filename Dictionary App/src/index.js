const axios = require('axios');
const myKey = require("../config");

const word_id = process.argv[2];
const language = "en-gb"
const url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word_id.toLowerCase();

axios.get(url, {
    method: 'GET',
    headers: { //HERE IS THE DIFFERENCE
      'app_id': myKey.app_id, 'app_key': myKey.app_key
    },
    mode: 'no-cors'
   })
    .then(res => res.data) 
    //handles response

   .then(data => 
   
    console.log(`    ${data.id}(${data.results[0].lexicalEntries[0].lexicalCategory.text})
          1. ${data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]}
          2. ${data.results[0].lexicalEntries[0].entries[0].senses[1].definitions[0]}
          3. ${data.results[0].lexicalEntries[0].entries[0].senses[2].definitions[0]}
    Provided by: ${data.metadata.provider} `))
    //handles exact data
    
    .catch(err => console.log(err));
    //handles error
