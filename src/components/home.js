import React, { Component } from 'react';
import axios from "axios";

import LinkUrl from "./link-url";


export default class Home extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            link: "",
            shortUrl: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.shortenedLink = this.shortenedLink.bind(this);
    }


    shortenedLink() {
        return (
            this.state.shortUrl
        )
    }
    

    handleChange(event) {
       
        this.setState({
        
            [event.target.name]: event.target.value
        })
        console.log("Handle change", event);
    }

    handleSubmit(event) {
        console.log("Handle submit", event);
        
        axios.post('http://localhost:3002/url/addUrl', 
            { url: this.state.link }
        )
            .then((response) => {
                console.log(response);
                if(response) {
                    this.setState({ 
                        shortUrl: response.data
                    });
                }
            })

          .catch(function (error) {
            console.log(error);
          });

        event.preventDefault();
    }



    render() {
        return (
            <div>
                
                <h1 className="title">Redis Link Shortener</h1>
                <p className="description">Enter a long link and press the button to receive a shortened link. Head to the Links tab to view a list of the links you've entered!</p>

                <form onSubmit={this.handleSubmit} className="form-template">
                    <input 
                        className="input"
                        type="url" 
                        name="link" 
                        placeholder="https://example.com"
                        value={this.state.url}
                        pattern="https://.*"
                        onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit" className="submit-btn">Shorten Link</button>
                    </div>
                </form>
                <div className="shortened-link">
                   
                    <a target="_blank" href={this.state.link}>{this.shortenedLink()}</a>
                </div>             
            </div>
        );
    }
}