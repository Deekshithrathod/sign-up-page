require("dotenv").config();

const notion = require("./notionConnection");
const databaseId = process.env.NOTION_DATABASE_ID;

async function addEmail(email) {
  try {
    await notion.pages.create({
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
  } catch (error) {
    console.error(error.body);
  }
}

module.exports = addEmail;
