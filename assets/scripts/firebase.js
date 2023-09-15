import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js'
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js'

class Firebase {  
  constructor() {
    const firebaseConfig = {
      databaseURL: "https://web-profile-4f250-default-rtdb.asia-southeast1.firebasedatabase.app/"
    }
    
    const app = initializeApp(firebaseConfig)
    const database = getDatabase(app)
    
    this.projectsRef = ref(database, "projects")
    this.skillsetRef = ref(database, "skillset")
  }


  skillsetValueHandling(callback) {
    onValue(this.skillsetRef, (snapshot) => {
      callback(Object.values(snapshot.val()));
    })
  }

  projectsValueHandling(callback) {
    onValue(this.projectsRef, (snapshot) => {
      callback(Object.values(snapshot.val()));
    })
  }
}

export default Firebase;
