import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MainView from './components/MainView'
import SideBar from './components/SideBar'
import axios from 'axios'
import { UserProvider } from './components/userContext'

function App() {

  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState('')

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f0e47faf32304494873d0489b76b48a6")
      .then((res) => {
        setIsLoading(false)
        setNews(res.data.articles)
        setErrors('')
      })
      .catch(e => {
        setErrors(e)
        setIsLoading(false)
      })
  }, [])

  const updateNews = (country, cat) => {
    console.log(country, cat);
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=f0e47faf32304494873d0489b76b48a6`)
      .then(res => {
        setIsLoading(false)
        setNews(res.data.articles)
        setErrors('')
      })
      .catch(e => {
        setIsLoading(false)
        setErrors(e)
      })
  }

  return (
    <div className="overflow-hidden">
      <Navbar />
      <UserProvider value={news}>
        <div className="flex mainMenu absolute bottom-0">
          <SideBar updateNews={updateNews} />
          {isLoading ? 'Loading Please wait' : <MainView />}
          {errors ? errors : null}
        </div>
      </UserProvider>
    </div>
  )
}

export default App
