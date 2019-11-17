import React from 'react'
import { useList } from "../hooks"


export default props => {
    const { titles } = useList()

return (
    <div className="left">
      {titles.map(t => (
          <div>
        <p key={t.id}>{t.name}</p>
        <p> {t.id}</p>
        </div>
      ))}
    </div>
  )
}
