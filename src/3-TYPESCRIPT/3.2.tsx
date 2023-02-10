import { useState } from 'react'
import styled from 'styled-components'
import Circle from './Circle'

function D() {
  const [value, setValue] = useState('')
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // const {
    //   currentTarget: { value },
    // } = event
    // setValue(value)
    setValue(event.currentTarget.value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('hello', value)
  }
  return (
    <div>
      <Circle borderColor="red" bgColor="teal" />
      <Circle text="im manseon" bgColor="tomato" />
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default D
