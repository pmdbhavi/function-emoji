import {useState} from 'react'
import Navbar from '../Navbar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import {MainContainer,Con,Bottom} from './styledComponents'

const EmojiGame=(props)=>{
    const {emojisList}=props
    const [list,setList]=useState([])
    const [topScore,setTopScore]=useState(0)
    const [isGameProgress,setIsGameProgress]=useState(true)

    const getUpdatedList=()=>{
        const updatedList=(emojisList.sort(()=>Math.random()-0.5))
        return updatedList
    }
    const sortedList=getUpdatedList()
    const getRenderScore=(score)=>{
        let newScore=topScore
        if(score>topScore){
            newScore=score
        }
        setTopScore(newScore)
        setIsGameProgress(false)
    }

    const onClickEmoji=(id)=>{
        const isEmojiPresent=list.includes(id)
        if(isEmojiPresent){
            getRenderScore(list.length)
        }
        else{
            if(list.length===emojisList.length-1){
                getRenderScore(emojisList.length)
            }
            setList(prevState=>[...prevState,id])
        }
    }
    const onPlay=()=>{
        setIsGameProgress(true)
        setList([])
    }

    return(
        <MainContainer>
            <Navbar topScore={topScore} score={list.length} isGameProgress={isGameProgress} />
            <Bottom>
                {isGameProgress ? 
                <Con>
                    {sortedList.map(each=>(
                        <EmojiCard details={each} key={each.id} toChange={onClickEmoji}/>
                    ))}
                </Con>:
                <WinOrLossCard score={list.length} isWon={list.length===emojisList.length} onPlay={onPlay}/>
                }
            </Bottom>
        </MainContainer>
    )
}
export default EmojiGame