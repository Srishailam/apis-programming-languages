import React from 'react'

const ProgrammingLanguages = ({languages}) => {
  return (
    <div>
      <h1>ProgrammingLanguages</h1>
      <ul>
      {
        languages.data.map((item) => {
          return <li>
            {
              item.name
            }
          </li>
        })
      }
      </ul>
    </div>
  )
}

export default ProgrammingLanguages