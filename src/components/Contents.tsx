import React from 'react'

type ContentsProps = {
    contacts: any;
}

type EntryProps = {
  name: string
  phonenumber: string
}

const Entry: React.FC<EntryProps> = (props) => {
  return <div >
    <span><p>Name: {props.name}<br/>Number: {props.phonenumber}</p></span>
  </div>
}

const Contents: React.FC<ContentsProps> = (props) => {
  let key = 1;
  return (
    
    <div>
      {props.contacts.map((prop: any) => (
        <div key = {key++}>
          <Entry name={prop.name} phonenumber={prop.phonenumber} />
            </div>
        ))}
        <p className="">Number of entries: {props.contacts.length}</p>
      </div>
  )
}

export default Contents