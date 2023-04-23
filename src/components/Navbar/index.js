import {NavbarCon,EmojiCon,EmojiImage,Heading,Score,TopScore,ScoreCon} from './styledComponents'

const Navbar=(props)=>{
    const {score,topScore,isGameProgress}=props
    return(
        <NavbarCon>
            <EmojiCon>
                <EmojiImage src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emojigame" />
                <Heading>Emoji Game</Heading>
            </EmojiCon>
            <ScoreCon>
            {isGameProgress && 
                <>
                <Score>Score: {score}</Score>
                <TopScore>Top Score: {topScore}</TopScore></>}
            </ScoreCon>
        </NavbarCon>
    )
}

export default Navbar