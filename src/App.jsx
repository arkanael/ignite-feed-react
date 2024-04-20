import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from  './components/Sidebar'

import styles from './App.module.css'

import './global.css';


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
        data="15/03/2024"
      />
      <Post 
        author="Juliana Ianov" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iure velit enim exercitationem aperiam voluptatem iusto, ad expedita pariatur blanditiis dolorum odio. Voluptates veniam cum aperiam eaque, quasi molestias sunt." 
        data="14/03/2024"
      />
      </main>
    </div>
   </div>
  )
}