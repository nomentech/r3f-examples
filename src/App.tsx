import { useState } from "react"

import Example1 from "./BasicDemo/Example"
import Example2 from "./TransformControlsAndMakeDefault/Example"

const examples = [
  {
    name: "Basic Demo",
    component: <Example1 />
  },
  {
    name: "TransformControls And makeDefault",
    component: <Example2 />
  }
];

const App = () => {
  const [example, setExample] = useState(examples[0]);

  return (
    <div>
      <div className="panel">
        {examples.map(example => (
          <div 
            key={example.name} 
            onClick={() => setExample(example)}>
              {example.name}
          </div>
        ))}
      </div>
      <div className="viewer">
        {example.component}
      </div>
    </div>
  );
}

export default App;
