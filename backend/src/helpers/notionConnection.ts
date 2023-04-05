const { Client } = require("@notionhq/client");
require("dotenv").config();

const Notion = new Client({ auth: process.env.NOTION_KEY });

module.exports = { Notion };
