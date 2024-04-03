import {Component} from 'react'

import Tabs from '../Tabs'
import Item from '../Item'

import './index.css'

class MultilingualGreetings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: props.languageGreetingsList[0].id,
    }
  }

  buttonClicked = id => {
    this.setState({activeId: id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeId} = this.state

    const filteredList = languageGreetingsList.filter(
      each => each.id === activeId,
    )

    return (
      <div className="background-container">
        <h1 className="heading">Multilingual Greetings</h1>

        <div className="buttons-list">
          {languageGreetingsList.map(each => (
            <Tabs
              key={each.id}
              buttonDetails={each}
              isActive={each.id === activeId}
              buttonClicked={this.buttonClicked}
            />
          ))}
        </div>

        <ul className="images-list">
          {filteredList.map(each => (
            <Item key={each.id} imageDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MultilingualGreetings
