import app from 'firebase/app';
import 'firebase/database';

const apiKey = process.env.GATSBY_API_KEY;
const authDomain = process.env.GATSBY_AUTH_DOMAIN;
const databaseURL = process.env.GATSBY_DATABASE_URL;
const projectId = process.env.GATSBY_PROJECT_ID;
const storageBucket = process.env.GATSBY_STORAGE_BUCKET;
const messagingSenderId = process.env.GATSBY_MESSAGING_SENDER_ID;

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  scores = () => this.db.ref('scores');
}

export default Firebase;
