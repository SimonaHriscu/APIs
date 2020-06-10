const axios = require('axios');
const myKey = require("../config");

const word_id = process.argv[2];
const language = "en-gb"
const url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word_id.toLowerCase();


axios.get(url, {
    headers: { //HERE IS THE KEY
      'app_id': myKey.app_id, 'app_key': myKey.app_key
    }
   })

    .then(res => res.data) 
    //handles response

   .then(data => {
     const {results} = data;
     const arrData = results[0].lexicalEntries[0].entries[0].senses;
     console.log(`  ${data.id}(${data.results[0].lexicalEntries[0].lexicalCategory.text})
      `)
     arrData.forEach((sense, index) => {
       console.log(`    ${(index + 1).toString()} ${sense.shortDefinitions.join(' ')};`);
     })
     console.log(`Provided by: ${data.metadata.provider}. `)
   })
    //handles exact data
    
    .catch(err => console.log(err));
    //handles error
