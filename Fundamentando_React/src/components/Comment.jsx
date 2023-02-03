import { HiOutlineThumbUp, HiOutlineTrash } from 'react-icons/hi'
import { Avatar } from './Avatar'
import dayjs from 'dayjs'

import './Comment.css'
import { useState } from 'react'

export function Comment({ content, onDeleteComment } ) {
  const hourComment = dayjs().hour()
  const timeComment = `Há ${hourComment}h atrás`
  const [likeQuantity, setLikeQuantity] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  
  function handleLikeComment() {
    // const newLikeQuantity = likeQuantity + 1
    // setLikeQuantity(newLikeQuantity)
    setLikeQuantity((state) => { // ACESSAR O VALOR MAIS RECENTE COMO UM ARGUMENTO DA FUNÇÃO
      return state + 1
    })
  }

  return (
    <div className="comment">
      <Avatar hasBorder={false} src="https://github.com/lucaswork.png"/>

      <div className="comment-box">
        <div className="comment-content">
          <header>
            <div className="author-and-time">
              <strong>Daniel Alexsandro Abrão</strong>
              <time title="11 de janeiro às 10:33" dateTime="2022-05-11 08:20:45" className="time-header">{timeComment}</time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <HiOutlineTrash size={24} />
            </button>
          </header>

          <p>{content} </p>

        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <HiOutlineThumbUp />
            Aplaudir <span>{likeQuantity}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}