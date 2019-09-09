import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                测试组件
            </div>
        )
    }
}

const container = document.getElementById('root');
ReactDOM.render(<App></App>,container)
