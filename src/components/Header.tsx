import React from 'react'

type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="mb-4">
        <h1 className="font-extrabold">{ props.title }</h1>
    </div>
  )
}

export default Header