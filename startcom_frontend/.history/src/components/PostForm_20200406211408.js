import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body:' '

        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.tar]
        })
    }


    render() {
       
        return (
            <div> 
                <h1>Add</h1>
                <form>

                    <label>Title:</label> <br/>
                    <input type ='text' name='title' onChange={this.onChange} value = {this.state.title}/> <br/>
                    <label>Body:</label> <br/>
                    <textarea name='body' value = {this.state.body}  onChange={this.onChange}  /><br/>
                    <button type ='submit'> Add</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm;
