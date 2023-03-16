import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

import { Link } from 'react-router-dom'

interface TweetProps {
  content: string
}

export const Tweet = (props: TweetProps) => {
  return (
    <Link to="/status" className='tweet'>
      <img src="https://github.com/jeffsdc.png" alt="Jeff Sousa" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Jeff Sousa</strong>
          <span>@jeffsdc</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowsClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
      
    </Link>
  )
}