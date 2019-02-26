import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import style from './css/main.scss';

class App extends Component {
    render() {
        return (
            <div>
            <Layout>
                <h2>App js!</h2>
            </Layout>
            </div>
        )
    }
}
export default App;