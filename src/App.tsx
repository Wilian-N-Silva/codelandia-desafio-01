import { useEffect, useState } from 'react'
import { Post } from './components/Post'
import { PostInterface } from './interfaces/post_interface'

import searchIcon from './assets/ant-design_search-outlined.svg'

const postList: PostInterface[] = [
  {
    title: 'Agora é oficial: o Windows 11 está vindo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
    created_at: '02 de jul, 2021',
    is_favorite: true
  },
  {
    title: 'Tim Berners-Lee vai leiloar código-fonte da web',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    created_at: '02 de jul, 2021',
    is_favorite: false
  },
  {
    title: 'Tem Firefox novo no pedaço e você vai querer migrar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
    created_at: '02 de jul, 2021',
    is_favorite: false
  },
  {
    title: 'John McAfee, criador do antivírus McAfee, morre',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    created_at: '02 de jul, 2021',
    is_favorite: false
  },
]

function App() {
  const [posts, setPosts] = useState<PostInterface[]>(postList)
  const [searchField, setSearchField] = useState('')

  const handleSearchField = () => {
    if (searchField.trim().length > 0) {
      const filtered: PostInterface[] = posts.filter((post, index) => {
        return post.title.toLocaleLowerCase().includes(searchField)
      })
      setPosts(filtered)
    } else {
      setPosts(postList)
    }
  }

  useEffect(() => {
    handleSearchField()
  }, [searchField])

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="title">
            <h1>Codelândia</h1>
            <h2>blog</h2>
          </div>
          <div className="search-bar">
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Pesquisar no blog"
              value={searchField}
              onChange={(event) => setSearchField(event.target.value)}
            />
          </div>
        </div>
      </header>
      <main className="container">
        {
          posts.length >= 1
            ? <ul className="post-list">
              {
                posts.map((post, index) => {
                  return <Post
                    key={index}
                    title={post.title}
                    description={post.description}
                    created_at={post.created_at}
                    is_favorite={post.is_favorite}
                  />
                })
              }
            </ul>
            : <div className="no-result">
              Nenhum resultado para <strong>"{searchField.trim()}"</strong>
            </div>
        }
      </main>
    </div>
  )
}

export default App
