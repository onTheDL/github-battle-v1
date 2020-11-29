import React, { Component } from "react"


function LanguageNav({ selected, onUpdateLanguage }) {
  
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {languages.map(language => (
        <li key={language}>
          <button 
            className='btn-clear nav-link'
            style={language === selected ? { color: 'rgb(187, 46, 31)'} : null }
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render() {
    return (
      <>
        <LanguageNav 
          selected={this.state.selectedLanguage}
          onUpdateLanguage={this.updateLanguage} 
        />
      </>
    )
  }
}
