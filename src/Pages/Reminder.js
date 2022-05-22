import React from 'react';
import axios from "axios"
import reminderServices from '../components/services/reminders'



class Reminder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
      newName: '',
      newTime: ''
    }
  }

      componentDidMount() {
        reminderServices
          .getAll()
          .then(reminders => {
            this.setState({ reminders })
          })
      }

      addName = (event) =>{
          event.preventDefault()
          const nameObject = {
            name: this.state.newName,
            timestamp: this.state.newTime,
          } 


        axios
        .post('/api/reminders', nameObject) .then(response => { this.setState({ reminders: this.state.reminders.concat(response.data),
            newName: '',
            newTime: ''
          })
        })

}
   

   handleNameChange = (event) => {
       console.log(event.target.value)
       this.setState({newName: event.target.value})
   }

   handleTimeChange = (event) =>{
     this.setState({newTime: event.target.value})
   }


   deleteReminder = (id) => {
    return() => {
    const url = `/api/reminders/${id}`

        window.confirm("Would u want to remove it") ?axios .delete(url)
        (reminderServices.getAll().then(reminders => {this.setState({ reminders }) })): alert("it was not removed");
      } 
      }

  render() {
    

    return (
      <div>
            <h2>Add Reminder</h2>
            
            <form onSubmit={this.addName}>
              
              <div>
                Title: <input value={this.state.newName} onChange={this.handleNameChange} />
              </div>

              <div>
                Time: <input value={this.state.newTime} onChange={this.handleTimeChange} />
              </div>
                
              <div>
                <button type="submit">Add</button>
              </div>

        </form>

        <h2>Reminders</h2>
        {this.state.reminders.map(reminder => { return (
             <div key={reminder.id}>
                 <p> {reminder.timestamp} {reminder.name}  <button onClick={this.deleteReminder(reminder.id)}>Delete</button></p>
             </div>  
        )})}
      
      </div>
      
    )
  }
}

export default Reminder