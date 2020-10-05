import React, { useState, useEffect, useContext } from 'react'

import MeetingSessionContext from 'contexts/MeetingSessionContext'

import VideoTile from './components/VideoTile'

// :: ---

function VideoFeeds() {
  const session = useContext(MeetingSessionContext)
  const [videoTiles, setVideoTiles] = useState([])

  useEffect(() => {
    if (!session || session.error) return
    // :: ---

    const observer = {
      // :: this is called whenever a new (video) tile is created,
      //    or if the state of an existing tile changes.
      videoTileDidUpdate: (tileState) => {
        console.debug('tile received:', tileState)
        // :: ignore a tile without an attendee ID,
        //    or if it's a content / screenshare
        if (!tileState.boundAttendeeId || tileState.isContent) return
        // :: ---

        setVideoTiles((tiles) => {
          if (tiles.some((id) => id === tileState.tileId)) return tiles
          // :: ---

          // :: if this is our own video feed, then place this at the start
          //    of the video feed
          if (tileState.localTile) return [tileState.tileId, ...tiles]
          else return [...tiles, tileState.tileId]
        })
      },

      // :: this is called whenever a (video) tile is removed.
      videoTileWasRemoved: (tileId) => {
        setVideoTiles((tiles) => {
          return tiles.filter((id) => id !== tileId)
        })
      },
    }

    session.audioVideo.addObserver(observer)

    return () => {
      session.audioVideo.removeObserver(observer)
    }
  }, [session])

  return (
    <div className='w-full p-4 grid grid-cols-4 gap-3 grid-flow-row-dense'>
      {videoTiles.map((id) => (
        <VideoTile id={id} />
      ))}
    </div>
  )
}

export default VideoFeeds
