const axios = require("axios");

const url = require("url");

class DictionaryClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl =
      "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/";
  }

  get(endpoint) {
    const URL = url.resolve(this.baseUrl, endpoint);
    return axios
      .get(URL, {
        headers: {
          //HERE IS THE KEY
          app_id: this.apiKey.app_id,
          app_key: this.apiKey.app_key,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        const { results } = data;
        const arrData = results[0].lexicalEntries[0].entries[0].senses;
        const type = data.results[0].lexicalEntries[0].lexicalCategory.text;
        console.log(`  ${data.id}(${type})
         `);
        arrData.forEach((sense, index) => {
          console.log(
            `    ${(index + 1).toString()} ${sense.shortDefinitions.join(" ")};`
          );
        });
        console.log(`Provided by: ${data.metadata.provider}. `);
      })
      .catch((err) => Promise.reject(err.response.data.message));
  }

  async getDictionary(word_id) {
    let endpoint = `${word_id}`;
    return await this.get(endpoint);
  }
}

module.exports = DictionaryClient;
