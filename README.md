<h1 align="center">Node.js Bot Api</h1>
<div>
Link Telegram Bot API [Telegram Bot API](https://core.telegram.org/bots/api).

[![Bot API](https://img.shields.io/badge/Bot%20API-v.5.5-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
![npm](https://img.shields.io/npm/v/telegraf?label=Telegraf&logo=npm&logoColor=%23fff&style=flat-square)
![npm](https://img.shields.io/npm/v/ytdl-core?color=%23CB3837&label=Telegraf&logo=npm&logoColor=%23fff&style=flat-square)
![npm](https://img.shields.io/npm/v/axios?label=Telegraf&logo=npm&logoColor=%23fff&style=flat-square)

</div>

# Youtube Audio Downloader Bot

## Download Packages

```sh
npm install
```

## Working

- Open Bot URL and Send /Start To Start The Bot.
- Send Any Youtube link and Bot Will Send MP3 File To You.

<br>
<p align="center"><img src="gif/help.gif" width="100%" alt="Show Bot"></p>
<br>

## Requirements

1. Node.js and npm
2. Telegram Bot
3. Server To Get Requests
4. MongoDB Database

## Deploy the bot

Create a bot on telegram using [@botfather](t.me/botfather)  
get Monogdb server Atlas or Community [MongoDB](https://www.mongodb.com/)  
Create a public channel on telegram  
Set environment variables in .env file
Send message with waiting message in channale
Send message with help message in channale

- API_TOKEN_BOT : your bot API token
- MONGODB_URL : MongoDb link for audio management
- CHANNEL_ID : Get Channale Id \*You can use IDBot to get the Id [@username_to_id_bot](https://t.me/username_to_id_bot)
- GIF_WAITING : Id of message have the waiting message in channale \*first message id will be 1
- GIF_HELP : Id of message have the help message in channale \*first message id will be 1

## Support

For support, Send me in telegram [@Kakaratt0](https://t.me/Kakaratt0)
