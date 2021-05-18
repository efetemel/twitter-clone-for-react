import {React,useState} from 'react'
import axios from 'axios'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/Icon'
const TweetBox = () => {
    const [content, setContent] = useState("");

    const sendTweet = () => {
        if(content !== ''){
            const test = {
                id: 1,
                avatar: "https://pbs.twimg.com/profile_images/1072875232967290881/DqrxPbyT_400x400.jpg",
                content: content,
                displayName: "Efe Temel ERSÖZ",
                image: "https://i.ytimg.com/vi/MjECqu8t1OM/maxresdefault.jpg",
                timestamp: "now",
                username: "efetemel"
            }
            axios({
                method:'post',
                url:'http://localhost:3001/tweets',
                data:test
            });
        }
    }
        return (
            <div className="flex flex-col flex-1 mt-2 px-2">
                <textarea className="w-full text-xl placeholder-gray-dark overflow-hidden bg-bg-transparent resize-none outline-none" placeholder="What's happening?"
                onChange={(e) => setContent(e.target.value)}
                value={content}/>
                <div className="flex items-center justify-between">
                    <div className="flex -ml-3">
                        <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest text-primary-base">
                            <ImageIcon />
                        </div>
                        <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest text-primary-base">
                            <GIFIcon />
                        </div>
                        <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest text-primary-base">
                            <PollIcon />
                        </div>
                        <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest text-primary-base">
                            <EmojiIcon />
                        </div>
                        <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest text-primary-base">
                            <ScheduleIcon />
                        </div>
                    </div>
                <button className="bg-primary-base text-white px-4 py-2 font-medium rounded-full" onClick={sendTweet}>Tweet</button>   
                </div>
            </div>
        )
    }

export default TweetBox
