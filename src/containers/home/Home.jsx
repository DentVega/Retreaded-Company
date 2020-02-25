import React, {Component} from 'react';
import './Home.scss';
import BannerApp from "../bannerApp/BannerApp";

class Home extends Component {
    render() {
        return (
            <div>
                <BannerApp/>
            </div>
        );
    }
}

export default Home;
