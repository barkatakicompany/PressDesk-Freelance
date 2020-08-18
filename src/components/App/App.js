import React from 'react';
import './App.css';
import '../shared/FontAwesomeIcons.js'

import Navigation from '../shared/Navigation'

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: "Today's",
    path: "/todays"
  },
  {
    title: "Assam",
    path: "/assam"
  },
  {
    title: "National",
    path: "/national"
  },
  {
    title: "International",
    path: "/internnational"
  },
  {
    title: "Sports",
    path: "/sports"
  },
  {
    title: "Employment",
    path: "/employment"
  },
  {
    title: "COVID",
    path: "/covid"
  },
  {
    title: "Tech",
    path: "/technology"
  }
]

function App() {
  return (
    <div className="App">
      <Navigation siteNavigations={navLinks}/>
    </div>
  );
}

export default App;
