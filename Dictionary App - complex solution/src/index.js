const dictionary = require("./lib/dictionary");
const word_id = process.argv.slice(2);


dictionary(word_id[0], word_id[1]);
