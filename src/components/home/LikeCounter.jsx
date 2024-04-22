import { useState } from "react"

export default function LikeCounter() {
  const [likeCounter, setLikeCounter] = useState(0);
  
  const handleLike = () => {
    setLikeCounter(likeCounter + 1);
  }

  const handleDislike = () => {
    setLikeCounter(likeCounter -1);
  }


  return (
    <div className="flex justify-between p-2">
        <span 
            className="material-symbols-rounded text-green-500"
            onClick={handleLike}
        >thumb_up</span>
        <div className="flex gap-1">
            <p>{likeCounter}</p>
            <span
                className="material-symbols-rounded text-red-500"
                onClick={handleDislike}
            >favorite</span>
            {/* <span className="material-symbols-rounded">heart_broken</span> */}
        </div>
        <span className="material-symbols-rounded text-red-500">thumb_down</span>
    </div>
  )
}
