module.exports.config = {
    name: "bible",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Joshua Sy & Choru Tiktokers",
    description: "Random Bible Verse 😇",
    commandCategory: "random-quote",
    cooldowns: 1,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/IEyYKzn.jpeg","https://i.imgur.com/En3e5AJ.jpg", "https://i.imgur.com/iGSJ1SK.jpg", "https://i.imgur.com/7UiYEWh.jpg", "https://i.imgur.com/QtbGfTV.jpg"];
var bible = [`John 16:33

pagbinato ka ng bato,kantutin mo ng todo. `, `Isaiah 41:10 (NIV)

So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.`, `Philippians 4:6–7 (NIV)

Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.`, `Psalm 34:4–5, 8

I sought the LORD, and He answered me and delivered me from all my fears.
