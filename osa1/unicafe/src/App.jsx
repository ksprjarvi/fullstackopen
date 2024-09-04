import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [averageCount, setAverageCount] = useState(0)
  const [positive, setPositive] = useState(0)

  const addGoodClick = () => {
    const newGood = good + 1
    const newAll = all + 1
    const averageCountNew = averageCount + 1
    setGood(newGood)
    setAll(newAll)
    setAverageCount(averageCountNew)
    setAverage(averageCountNew / newAll)
    setPositive((newGood / newAll) * 100)
  }

  const addNeutralClick = () => {
    const newAll = all + 1
    setNeutral(neutral + 1)
    setAll(newAll)
    setAverage(averageCount / newAll)
    setPositive((good / newAll) * 100)
  }

  const addBadClick = () => {
    const newAll = all + 1
    setBad(bad + 1)
    setAll(newAll)
    setAverage((averageCount - 1) / newAll)
    setAverageCount(averageCount - 1)
    setPositive((good / newAll) * 100)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGoodClick} title={"good"} />
      <Button onClick={addNeutralClick} title={"neutral"} />
      <Button onClick={addBadClick} title={"bad"} />
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={average}
      positive={positive} />
    </div>
  )
}

export default App