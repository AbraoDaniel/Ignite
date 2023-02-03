import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'

import dayjs from 'dayjs'

import './Post.css'

export function Post({ author, publishedAt, content}) {
  const publishedDateFormatted = dayjs(publishedAt).format('MMMM D, YYYY h:mm A')
  const [comments, setComments] = useState(['Adorei o post, parabéns!'])

  const [newCommentText, setNewCommentText] = useState('')

  function handleSubmit() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    // IMUTABILIDADE - AS VARIÁVEIS NÃO SOFREM ALTERAÇÃO,NÓS CRIAMOS UM NOVO VALOR (NOVO ESPAÇO DE MEMÓRIA) -> PERMITE SER MAIS PERFORMÁTICO (CRIAR É MAIS RÁPIDO DO QUE ALTERAR)
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isCommentEmpty = newCommentText.length === 0

  return (
    <article className="post">
      <header className="header-post">
        <div className="author">
          <Avatar src={author.avatarUrl}/>
          <div className="author-info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de janeiro às 10:33" dateTime="2022-05-11 08:20:45" className="time-header">{publishedDateFormatted}</time>
      </header>

      <div className="content">
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if(line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleSubmit} className="comment-form">
        <strong>Deixe seu feedback!</strong>
    
        <textarea name="text_user"
          placeholder='Escreva um comentário...'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        
        <footer>
          <button 
          type='submit'
          className={
            newCommentText.length === 0 ? "button-submit-disabled" 
            : "button-submit"
          } 
          disabled={isCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className="comment-list">
        {comments.map(comment => {
          return (
            <Comment 
            content={comment} 
            key={comment} 
            onDeleteComment={deleteComment}
            />)
        })}
      </div>
    </article>
  )
}