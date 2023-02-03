import './Sidebar.css'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { Avatar } from './Avatar'

export function Sidebar(){
  return (
    <aside className="sidebar">
      <img src='https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' 
      className="cover"/>

      <div className="profile">

        <Avatar src="https://github.com/abraoDaniel.png"/>

        <strong>Daniel Alexsandro Abrão</strong>
        <span>Junior Developer</span>
      </div>

      <footer>
        <a href='#'> 
          <HiOutlinePencilAlt size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}