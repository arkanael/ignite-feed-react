import { Post } from './Post';
import { Header } from './components/header';
import './global.css';

export function App() {

  return (
   <div>
    <Header/>
      <Post 
        author="Luiz Guilherme Bandeira" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iure velit enim exercitationem aperiam voluptatem iusto, ad expedita pariatur blanditiis dolorum odio. Voluptates veniam cum aperiam eaque, quasi molestias sunt." 
      />
      <Post 
        author="Gabriel" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iure velit enim exercitationem aperiam voluptatem iusto, ad expedita pariatur blanditiis dolorum odio. Voluptates veniam cum aperiam eaque, quasi molestias sunt." 
      />
   </div>
  )
}