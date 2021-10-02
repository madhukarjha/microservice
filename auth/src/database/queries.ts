import db from './db';

/*
 * [function]       put()
 * @param {string}  collection      name of collection to insert document
 * @param {string}  key             unique identifier to retrive document
 * @param {any}     value           data to store in document, typically string or object
 */

const insertOne = async (data:object, key:string) => {
  try {
    //if (isEmpty(collection)) throw Error("Provide collection name");
    return await db.put(key, JSON.stringify(data));
  } catch (err) {
    return err;
  }
};

/*
 * [function]       get()
 * @param {string}  collection      name of collection where document is located
 * @param {string}  key             unique identifier to retrive document
 */

const findOne = async (key:string) => {
  try {
    // if (isEmpty(collection) || isEmpty(query))
    //   throw Error("Provide collection and key");

    const data = await db.get(key);
    const dataObject = JSON.parse(data);

    return dataObject;
  } catch (err) {
    return err;
  }
};

/*
 * [function]       del()
 * @param {string}  collection      name of collection where document is located
 * @param {string}  key             unique identifier of document
 */

const del = async (key:string) => {
  try {
    // if (isEmpty(collection) || isEmpty(key))
    //   throw Error("Provide collection and key");
    return await db.del(key);
  } catch (err) {
    return err;
  }
};

/*
 * [function]       put()
 * @param {string}  collection      name of collection to insert document
 * @param {string}  key             unique identifier to retrive document
 * @param {any}     value           data to merge into document, typically string or object
 */

const updateOne = async (data: object, key:string) => {
  try {
    // if (isEmpty(collection) || isEmpty(query))
    //   throw Error("Provide collection and query");
    // if (isEmpty(key)) throw Error("Provide key to match in collection");
    const doc = await findOne(key);
    const combined = { ...doc, ...data };
    return await insertOne(combined, key);
  } catch (err) {
    return err;
  }
};
export { insertOne, findOne, del, updateOne };
