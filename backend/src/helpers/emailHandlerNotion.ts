require("dotenv").config();
import { Notion as notion } from "./notionConnection";
const databaseId = process.env.NOTION_DATABASE_ID;

async function addEmail(email: string) {
  try {
    return await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
      },
    });
  } catch (error: any) {
    console.log("There has been an error while submitting");
    console.error(error);
  }
}

module.exports = addEmail;
