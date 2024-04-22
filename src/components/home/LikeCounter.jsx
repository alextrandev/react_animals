import { useState } from "react"

export default function LikeCounter({likes}) {
  const [likeCounter, setLikeCounter] = useState(likes);
  
  const handleLike = e => {
    if (e.target.id == "addLike") {
        setLikeCounter(likeCounter + 1);
    } else if (e.target.id == "removeLike") {
        setLikeCounter(likeCounter - 1);
    }
  }

  return (
    <div className="flex justify-between p-2">
        <span 
            className="material-symbols-rounded text-green-500"
            id="addLike"
            onClick={handleLike}
        >thumb_up</span>
        <div className="flex gap-1">
            <p>{likeCounter}</p>
            {likeCounter <= -5 && <span className="material-symbols-rounded">sentiment_very_dissatisfied</span>}
            {likeCounter < 0 && likeCounter > -5 && <span className="material-symbols-rounded text-red-500">mood_bad</span>}
            {likeCounter == 0 && <span className="material-symbols-rounded text-blue-500">sentiment_satisfied</span>}
            {likeCounter > 0 && likeCounter < 5 &&<span className="material-symbols-rounded text-green-500">mood</span>}
            {likeCounter >= 5 && <span className="material-symbols-rounded text-green-500">sentiment_very_satisfied</span>}
        </div>
        <span 
            className="material-symbols-rounded text-red-500"
            id="removeLike"
            onClick={handleLike}
        >thumb_down</span>
    </div>
  )
}
