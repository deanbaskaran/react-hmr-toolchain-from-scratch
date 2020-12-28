import React from "react"
import { hot } from "react-hot-loader/root"

const App = () => {
  const ello = () => console.log("ello babel.!")
  ello()
  return (
    <h1>FooBar</h1>
  )
}

export default hot(App)