import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { TypeAnimation } from 'react-type-animation';
import { mdiCheckBold } from '@mdi/js';
import '../home.css';

function Index() {

  return(

<ScrollContainer>
<ScrollPage page={0}>
  <Animator animation={batch(Fade(), MoveOut(0,-900))}> 
   <div className="grid-home">
   <div className="grid-home home">
       <span className="text1">WEBDEV </span> 
       </div>



    <div className="grid-vert slogan">
    Transform your vision into a stunning online experience with our web development services
    </div>


  </div>
  </Animator>
  </ScrollPage>



  </ScrollContainer>
      
  )

}

export default Index;