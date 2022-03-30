import React from 'react';
import axios from 'axios';


class ReminderForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <form>
      <div>
        Name: <input className="w-44 mb-2 text-black rounded-lg border-2 border-black focus:outline-none" onChange={this.props.onChangeName}/>
      </div>

      <div>
        At time: <input className="w-44 mb-2 text-black rounded-lg border-2 border-black focus:outline-none" onChange={this.props.onChangeDate}/>
      </div>

      <div>
        <button className="w-20 mb-2 text-black rounded-lg border-2 border-black focus:outline-none" onClick={this.props.onAddReminder}>Add</button>
      </div>

    </form>
  }
}

class ReminderItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
    {new Date(this.props.timestamp).toDateString() + " "}
    {this.props.name}

    <button className="w-20 mb-2 text-black rounded-lg border-2 border-black focus:outline-none" onClick={(e) => this.props.onRemoveItem(this.props.itemId)}>
        Remove
    </button>
    </div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    reminders: [],
    newName: '',
    newDate: ''
    }
  }

  componentDidMount() {
    let app = this
    axios.get("http://localhost:3001/api/reminders").then(function (response) {
        app.setState({
        reminders: response.data.reminders
        })
        console.log(response);
        })
  }
  onChangeName = (e) => {
    this.setState({ newName: e.target.value});
  }
  onChangeDate = (e) => {
    this.setState({ newDate: e.target.value});
  }

  addReminder = (e) => {
    e.preventDefault();
    let reminders = this.state.reminders
    if (reminders.some(r => this.state.newName === r.name)) {
      alert("That reminder already exists. You cannot add the same reminder twice.")
      return;
    }
    
    let date = new Date(this.state.newDate)
    if (date === "Invalid Date") {
      alert("Wrong date :( Use this format, yyyy-mm-ddTHH:MM")
      return;
    }

    const newReminder = {
      name: this.state.newName,
      timestamp: date.toISOString()
    }

    let app = this
    axios.post("http://localhost:3001/api/reminders", newReminder).then(function (response) {
        reminders.push(response.data)
        app.setState({ reminders: reminders });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  removeItem = (itemId) => {
    if (!window.confirm("Do you really want to remove this item?"))
      return
    axios.delete("http://localhost:3001/api/reminders/" + itemId).then(() => {
        let reminders = this.state.reminders.filter(r => r.id !== itemId)
        this.setState({ reminders: reminders });
      })
  }

  render() {
    return ( 
      <div>
        <h2>Reminders</h2>
        <ReminderForm onChangeName={this.onChangeName} onChangeDate={this.onChangeDate} onAddReminder={this.addReminder}/>
        <h3>Reminders</h3>

        {this.state.reminders.map((reminder) => (
        <div key={reminder.id}>
            <ReminderItem name={reminder.name} timestamp={reminder.timestamp} itemId={reminder.id} onRemoveItem={this.removeItem}/>
        </div>
        ))}
      </div>
    )
  }
}

export default App