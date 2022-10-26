const { Database, aql } = require("arangojs");

const getConnection = () => {
  return new Database({
    url: "http://127.0.0.1:8529/",
    databaseName: "myapp",
    auth: { username: "myapp", password: "myapp123" },
  });
};

const getCollection = async (cName, db) => {
  const collections = await db.collections();

  if (collections.find((c) => c._name === cName)) {
    return await db.collection(cName);
  } else {
    return db.createCollection(cName);
  }
};

export const checkUid = async (uid) => {
  const db = getConnection();

  await getCollection("user", db);

  let result = [];

  const resx = await db.query(aql`
    FOR u IN user
      FILTER u._key == ${uid}
    RETURN u
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};
