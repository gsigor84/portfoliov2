import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Layer1 from './home/layer1';
import Layer2 from './home/layer2';
import './App.css';
import Home from './home/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ScrollContainer>

  <ScrollPage page={0}>
    <Animator animation={batch(Sticky(), Fade(), MoveOut(0,-700))}> 
<Home/>
</Animator>
  </ScrollPage>

  <ScrollPage page={1} >
    <Animator animation={batch(FadeIn(),MoveOut(0,-700))}> 
<Layer1/>
</Animator>
  </ScrollPage>

  
   
<Layer2/>

 



  </ScrollContainer>
    </div>
  );
}

export default App;
