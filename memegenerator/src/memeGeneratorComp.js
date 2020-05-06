/*'http://i.imgflip.com/1bij.jpg'
"https://api.imgflip.com/get_memes"*/

import React, {Component} from "react"

class Memes extends Component{
    constructor(){
        super()
        this.state = {
            topText:'',
            bottomText:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            apiImgs:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=> response.json())
        .then(response=>{
            const {memes} = response.data
            this.setState({apiImgs: memes})
        })
    }

    handleChange=(event)=>{//method that allows words to show on the screen when updated.
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const indexed = Math.floor(Math.random() * this.state.apiImgs.length)
        const memeImg = this.state.apiImgs[indexed].url
        this.setState({
            randomImg: memeImg
        })
    }

    render(){
        return(
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    name='topText'
                    value={this.state.topText}
                    onChange={this.handleChange}
                    />

                    <input
                    type='text'
                    name='bottomText'
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>

                <div className='meme'>

                <img src={this.state.randomImg} alt=''/>
                
                    <h2 className='topText'>{this.state.topText}</h2>
                    <h2 className='bottomText'>{this.state.bottomText}</h2>

                </div>
            </div> 
        )
    }
}
export default Memes