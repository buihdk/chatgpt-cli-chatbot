# ChatGPT CLI
A demo on how a CLI chatbot can be built with Node.js and OpenAI [chat completion](https://platform.openai.com/docs/guides/chat) feature. You will need an account with 
OpenAI (which is free) to interact with the chatbot.

- Run `npm i` to install necessary dependencies
- Run `touch .env` to create an env file. Set up 2 environment variables `OPENAI_ORGANIZATION_ID` and `OPENAI_API_KEY`. The Organization ID can be found [here](https://platform.openai.com/account/org-settings) whereas an API Key can be found [here](https://platform.
openai.com/account/api-keys). Your .env should look like this:
    ```
    OPENAI_ORGANIZATION_ID=org-randomstring
    OPENAI_API_KEY=sk-randomstring
    ```
- Run `node index.js` at root to start chatting with `ChatGPT`
