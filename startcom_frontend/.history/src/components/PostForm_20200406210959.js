import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
       
        return (
            <div> 
                <h1>Add</h1>
                <form>

                    <title>Title:</title> <br/>
                    <input type ='text' name=''/> <br/>
                    <title>Body:</title> <br/>
                    <textarea name='body' />
                </form>
                
            </div>
        )
    }
}

export default PostForm;
