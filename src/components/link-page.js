import React, { Component } from 'react';
import axios from "axios";

// import Home from "./home";
import LinkUrl from "./link-url";

export default class LinkPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            link: "",
            data: []
        };
        this.linkUrl = this.linkUrl.bind(this);
    }

    getLinkUrl() {
        axios.get('http://localhost:3002/url/getUrl/').then(response => {
            console.log(response);
            this.setState({
                data: response.data.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }


    linkUrl() {
        return this.state.data.map((item, index) => {
          return (  
            <LinkUrl key={index} value={item.data} url={item.urlId} />
          );
        });
    }

    componentDidMount() {
        console.log(this.getLinkUrl());
        this.getLinkUrl();
    }

        
    render() {
        return (
            <div>
                 { this.linkUrl() }   
                <div>
                    <LinkUrl />
               </div>       
            </div>
        );
    }
}