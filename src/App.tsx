
import './App.css'
import { BasicFunctions, BasicTypes, ObjectLiterals } from './typescript'

import { CounterWithHook, FormsPage, LoginPage } from './components'
import { UsersPage } from './components/UsersPage'

function App() {


  return (
    <main>
      <h1>Introduction</h1>
      <BasicTypes></BasicTypes>
      <ObjectLiterals></ObjectLiterals>
      <BasicFunctions></BasicFunctions>
      <CounterWithHook></CounterWithHook>
      <LoginPage></LoginPage>
      <UsersPage></UsersPage>
      <FormsPage></FormsPage>
    </main>
  )
}

export default App
