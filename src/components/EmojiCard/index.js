import {CardCon,Button,CardImage} from './styledComponents'

const EmojiCard=(props)=>{
    const {details,toChange}=props
    const {id,emojiName,emojiUrl}=details
    const getChanged=()=>{
        toChange(id)
    }

    return(
        <CardCon>
            <Button onClick={getChanged}>
                <CardImage src={emojiUrl} alt={emojiName}/>
            </Button>
        </CardCon>
    )
}
export default EmojiCard