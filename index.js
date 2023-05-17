import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

import * as dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * test to make sure openai is working as expected
 * running `node index.js` should return a response from openai chat bot
 */
// openai
//   .createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Hello" }],
//   })
//   .then((res) => {
//     console.log(res.data.choices[0].message.content);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((e) => {
      console.log(e);
    });
});
