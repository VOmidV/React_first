import {choice, remove} from './helpers'
import fruits from './foods';

function Main(){
  const rand = choice(fruits);
  const rev = remove(fruits, rand)
  return <div>
    <p>I'd like one {rand}, please</p>
    <p>Here you go: {rand}</p>
    <p>Delicious! May I have another? </p>
    <p>I'm sorry, we're all out. We have {rev.length}</p>
  </div>
  
}


export default Main;