import React, {Component} from 'react';
import './BannerApp.scss';
import CustomAppBar from "../../components/customAppBar/CustomAppBar";
import CustomFooter from "../../components/customFooter/CustomFooter";

class BannerApp extends Component {
    render() {
        return (
            <div>
                <CustomAppBar/>
                <h1>Banner App</h1>
                <CustomFooter/>
            </div>
        );
    }
}

export default BannerApp;
