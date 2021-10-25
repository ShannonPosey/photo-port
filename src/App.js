import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';


function App() {
  const [categories] = useState([
    {
            name: "commercial",
            description: "Photos of grocery store, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of other people in my life" },
        { name: "food", description: "Delicious delicacies" },
        { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of the nature"},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div >
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
