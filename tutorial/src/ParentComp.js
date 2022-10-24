import { ChildComp } from './ChildComp'

export const ParentComp = () => {
   const greetParent = () =>{
    alert('hello parent')
   }
   return <ChildComp greetHandler={greetParent}/>
  
}

