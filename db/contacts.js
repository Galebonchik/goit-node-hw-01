const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw new Error("Error reading contacts: " + error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    throw new Error("Error getting contact by ID: " + error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const ind = contacts.findIndex((item) => item.id === contactId);
    if (ind === -1) {
      return null;
    }
    const [removedContact] = contacts.splice(ind, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removedContact;
  } catch (error) {
    throw new Error("Error removing contact: " + error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: uuidv4(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (error) {
    throw new Error("Error adding contact: " + error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };