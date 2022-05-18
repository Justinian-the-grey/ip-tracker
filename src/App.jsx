import React, { useState, useEffect } from 'react'
import './App.css'
import CustomDiv from './components/custom-div'

function App () {
  const [text, setText] = useState('World')
  const [dataIp, setDataIp] = useState([])
  const [dataIpSpecs, setDataIpSpecs] = useState([])
  const onChangeBtn = () => {
    if (text === 'World') {
      setText('To You')
    } else {
      setText('World')
    }
  }

  async function getMyIp () {
    const options = {
      method: 'GET',
      header: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST'
      }
    }

    await fetch('https://api.ipify.org?format=json', options)
      .then(response => response.json())
      .then(response => {
        setDataIp(response)
        fetch(`https://ipinfo.io/${response.ip}/geo?token=907faf59b9afc3`, options)
          .then(response => response.json())
          .then(response => {
            setDataIpSpecs(response)
            console.log(response)
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getMyIp()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>The header Hello World</h1>
        <CustomDiv title="Div Title" buttonLabel="Inactive"/>
      </header>
      <main>
        <h2>The main Hello World: {text}</h2>
        <button onClick={onChangeBtn}>change</button>
        <h4>Your IP is: {dataIp.ip}</h4>
        <p>City: {dataIpSpecs.city}</p>
        <p>Region: {dataIpSpecs.region}</p>
        <p>Country: {dataIpSpecs.country}</p>
        <p>Location: {dataIpSpecs.loc}</p>
        <p>org: {dataIpSpecs.org}</p>
        <p>Postal: {dataIpSpecs.postal}</p>
        <p>Timezone: {dataIpSpecs.timezone}</p>
      </main>
      <footer>
        <h3>The footer Hello World </h3>
      </footer>
    </div>
  )
}

export default App
