import React from 'react';
import { useState, useEffect } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';


function App() {
  const [editor, setEditor] = useState(null);

   // useEffect to build the editor with grapesJS
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {}
      }
    });
    setEditor(editor);
  }, []);
  // Indicate where to init editor

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
