import {WinCard,ScoreContainer,Header,Scoring,Number,PlayButton,ImageCon} from './styledComponents'

const WinOrLossCard=(props)=>{
    const {score,onPlay,isWon}=props
    const onPlayButton=()=>{
        onPlay()
    }
    return(
        <WinCard>
            <ScoreContainer>
                <Header>{isWon?"You Won":"You Lose"}</Header>
                <Scoring>{isWon && "Best"} Score</Scoring>
                <Number>{score}/12</Number>
                <PlayButton onClick={onPlayButton} type="button">PlayButton</PlayButton>
            </ScoreContainer>
            <ImageCon src={isWon ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png"} alt="winorloss"/>
        </WinCard>
    )
}

export default WinOrLossCard