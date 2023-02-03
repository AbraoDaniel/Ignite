import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import './App.css'


// author: { avatar_url:"", name: "", role: ""}
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/abraodaniel.png',
      name: 'Daniel Alexsandro Abrão',
      role: 'Junior Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},

      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      { type: 'link', content:<a href="#">jane.design/doctorcare</a>},
    ],
    publishedAt: new Date('2022-01-12 15:35:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/fabiomello.png',
      name: 'Felipe Vieira',
      role: 'UX & UI Designer'
    },
    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},

      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      { type: 'link', content:<a href="#">jane.design/doctorcare</a>},
    ],
    publishedAt: new Date('2022-01-13 12:00:00')
  }
]

// ITERAÇÃO = CRIAR UMA ESTRUTURA DE REPETIÇÃO

export function App() {
  return (
    <div>
      <Header />

      <div className="wrapper">
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

