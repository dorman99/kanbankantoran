import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBSqQqHcATkJC-SKnM_b-zSVQHcMa6cnJw',
  authDomain: 'kanban-a91e6.firebaseapp.com',
  databaseURL: 'https://kanban-a91e6.firebaseio.com',
  projectId: 'kanban-a91e6',
  storageBucket: 'kanban-a91e6.appspot.com',
  messagingSenderId: '828744940545'
})

export const db = app.database()
export const kanban = db.ref('kanban')
