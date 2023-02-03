import './Avatar.css'

// DESESTRUTURAÇÃO 
// const user = { name: "Daniel"}
// const {name} = user
// AO APLICAR, CONSEGUIMOS ATRIBUIR VALORES DEFAULT PARA AS PROPRIEDADES

export function Avatar({ hasBorder = true, src}) {
  return (
    <img src={src} 
    className={hasBorder ? "avatar-with-border" : "avatar"}
    />
  )
}