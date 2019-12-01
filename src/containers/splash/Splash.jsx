import React, {Component} from 'react';
import logo from '../../logo.svg';
import './Splash.scss';

class Splash extends Component {

    timeSplash = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('result')
                },
                1000
            )
        )
    };

    async componentDidMount() {
        const data = this.timeSplash;
        if (data !== null) {
            this.props.history.push('/home');
        }
    }

    render() {
        return (
            <div className={'App'}>
                <header className={'App-header'}>
                    <img src={logo} className={'App-logo'} alt={'logo'}/>
                    <p>
                        WebApp Name
                    </p>
                </header>
            </div>
        );
    }
}

export default Splash;
