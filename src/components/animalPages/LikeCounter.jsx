export default function LikeCounter({ likes, addLike, removeLike }) {
  return (
    <div className="flex justify-between p-2">
      <span
        className="material-symbols-rounded text-red-500"
        id="removeLike"
        onClick={removeLike}
      >thumb_down</span>
      <div className="flex gap-1">
        <p>{likes}</p>
        {/* conditional rendering a bunch of icons based on likes */}
        {likes <= -5 && <span className="material-symbols-rounded">sentiment_very_dissatisfied</span>}
        {likes < 0 && likes > -5 && <span className="material-symbols-rounded text-red-500">mood_bad</span>}
        {likes == 0 && <span className="material-symbols-rounded text-blue-500">sentiment_satisfied</span>}
        {likes > 0 && likes < 5 && <span className="material-symbols-rounded text-green-500">mood</span>}
        {likes >= 5 && <span className="material-symbols-rounded text-very-satisfied">sentiment_very_satisfied</span>}
      </div>
      <span
        className="material-symbols-rounded text-green-500"
        id="addLike"
        onClick={addLike}
      >thumb_up</span>
    </div>
  )
}
