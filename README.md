# ChatGPT CLI
A demo on how a CLI chatbot can be built with Node.js and OpenAI [chat completion](https://platform.openai.com/docs/guides/chat) feature. You will need an account with 
OpenAI (which is free) to interact with the chatbot.

- Start by cloning the project `git clone git@github.com:buihdk/chatgpt-cli-chatbot.git`
- Go to `chatgpt-cli-chatbot` folder and run `npm i` to install required dependencies
- Run `touch .env` to create an env file. You will need to set up 2 environment variables `OPENAI_ORGANIZATION_ID` and `OPENAI_API_KEY`. The Organization ID can be found [here](https://platform.openai.com/account/org-settings) whereas an API Key can be found [here](https://platform.openai.com/account/api-keys). 
- Update `randomstring` with your actual Organization ID and API KEY, and run the command below to add them to env file:
    ```
    echo -e "OPENAI_ORGANIZATION_ID=org-randomstring\nOPENAI_API_KEY=sk-randomstring2" > .env
    ```  
    Your .env should look like this (with `randomstring` replaced):
    ```
    OPENAI_ORGANIZATION_ID=org-randomstring
    OPENAI_API_KEY=sk-randomstring
    ```
- Run `node index.js` at root to start chatting with `ChatGPT`
![](https://github.com/buihdk/chatgpt-cli-chatbot/blob/main/chatgpt-cli-demo.gif)
