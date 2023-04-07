const { Client } = require("@notionhq/client");
require("dotenv").config();

export const Notion = new Client({ auth: process.env.NOTION_KEY });
