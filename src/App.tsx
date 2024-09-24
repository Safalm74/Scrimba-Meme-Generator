import React from 'react'
import './App.css'
import * as constants from './constants'

//components
import Header from './components/Header'
import LabeledInput from './components/LabeledInput'
import GradientButton from './components/GradientButton'
import ImageCard from './components/ImageCard'
import randomElement from './utils/randomElement'


function App() {
  const [topText, setTopText] = React.useState<string>(constants.TOP_EXAMPLE)
  const [bottomText, setBottomText] = React.useState<string>(constants.BOTTOM_EXAMPLE)
  const [imageUrl, setImageUrl] = React.useState<string>(constants.MEMES_URL[0])

  return (
    <>
    <Header 
      headerLogoUrl={constants.APP_LOGO} 
      headerTitle={constants.APP_NAME} 
      headerDescription={constants.APP_DESCRIPTION} />

    <main>
      <div className="input-container">
        <LabeledInput 
        label={constants.TOP_TEXT} 
        value={topText} 
        onChange={(event)=>{setTopText(event)}} />
      
        <LabeledInput 
          label={constants.BOTTOM_TEXT} 
          value={bottomText} 
          onChange={(event)=>{setBottomText(event)}} />
      </div> 

      <GradientButton 
        label={constants.GENERATE_BTN_TEXT}
        onClick={()=>{setImageUrl(randomElement(constants.MEMES_URL))}} />

      <ImageCard
        imageUrl={imageUrl}
        topText={topText}
        bottomText={bottomText} />

    </main>


    </>
  )
}

export default App
