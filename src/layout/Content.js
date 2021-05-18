import React from 'react'
import { PopularIcon } from '../icons/Icon'
import TweetBox from '../components/TweetBox'
import Divider from '../components/Divider'
import FeedList from '../components/FeedList'
class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            feeds:[]
        }
    }

    async getTweet(){
        const baseUrl = "http://localhost:3001/tweets";
        const response = await fetch(baseUrl);
        const data = await response.json();
        this.setState({feeds:data})
    }
    componentDidMount() {
        this.getTweet();
    }
    componentDidUpdate(){
        this.getTweet();
    }

    render(){
        return(
            <main className="flex-1 flex-col border-r border-l border-gray-extra-light">
            <header className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extra-light bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <div className="text-primary-base w-6 h-6 ">
                <PopularIcon />
                </div>
            </header>
            <div className="flex px-4 py-3 space-x-2">
            <img src="https://pbs.twimg.com/profile_images/1072875232967290881/DqrxPbyT_400x400.jpg" 
            alt="Profile" className="w-11 h-11 rounded-full" />
                <TweetBox/>
            </div>
            <Divider/>
            <FeedList tweets={this.state.feeds}/>
        </main>
        )
    }
}

export default Content;
