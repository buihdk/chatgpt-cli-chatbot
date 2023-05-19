# ChatGPT CLI Chatbot
A demo on how a simple CLI chatbot can be built with Node.js and OpenAI [chat completion](https://platform.openai.com/docs/guides/chat) feature. You will need an account with OpenAI (which is free) to interact with the chatbot.

## Setup
- Start by cloning the project `git clone git@github.com:buihdk/chatgpt-cli-chatbot.git`
- Go to `chatgpt-cli-chatbot` folder and run `npm i` to install required dependencies
- Run `cp .env.sample .env` to create an `.env` file. This is how your `.env` file would look like:
    ```
    OPENAI_ORGANIZATION_ID=org-randomstring
    OPENAI_API_KEY=sk-randomstring
    ```
    - You will need to set up 2 environment variables `OPENAI_ORGANIZATION_ID` and `OPENAI_API_KEY`. The Organization ID can be found [here](https://platform.openai.com/account/org-settings) whereas an API Key can be found [here](https://platform.openai.com/account/api-keys)
    - Update your variables with your actual Organization ID and API Key
- Run `node index.js` at root to start chatting with `ChatGPT`

## Demo
![Demo](chatgpt-cli-demo.gif)
