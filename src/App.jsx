import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from  './components/Sidebar'

import styles from './App.module.css'

import './global.css';


const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/9624274?v=4',
      name: 'Luiz Guilherme Bandeira',
      role: 'Desenvolvedor Fullstack @ NAVA'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-21 12:42:00'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Maik Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-21 12:42:00'),
  },
]

export function App() {

  return (
   <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}

            />
          );
        })}
      {/* <Post 
        author="Luiz Guilherme Bandeira" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iure velit enim exercitationem aperiam voluptatem iusto, ad expedita pariatur blanditiis dolorum odio. Voluptates veniam cum aperiam eaque, quasi molestias sunt." 
        data="15/03/2024"
      />
      <Post 
        author="Juliana Ianov" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iure velit enim exercitationem aperiam voluptatem iusto, ad expedita pariatur blanditiis dolorum odio. Voluptates veniam cum aperiam eaque, quasi molestias sunt." 
        data="14/03/2024"
      /> */}
      </main>
    </div>
   </div>
  )
}