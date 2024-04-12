import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css'
import './global.css';

import { Sidebar } from  './components/Sidebar'

export function App() {

  return (
   <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
        author="Luiz Guilherme Bandeira" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iure velit enim exercitationem aperiam voluptatem iusto, ad expedita pariatur blanditiis dolorum odio. Voluptates veniam cum aperiam eaque, quasi molestias sunt." 
      />
      <Post 
        author="Gabriel" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iure velit enim exercitationem aperiam voluptatem iusto, ad expedita pariatur blanditiis dolorum odio. Voluptates veniam cum aperiam eaque, quasi molestias sunt." 
      />
      </main>
    </div>

     
   </div>
  )
}