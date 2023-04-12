import React from "react";
import '../styles.css';
import ReactList from 'react-list';
// ^This will be used to link to the sign up page

function Examples() {
    const examples = [<div className="containerBlock">Example Query 1</div>,
                      <br/>,
                      <div className="containerBlock">Example Query 2</div>,
                      <br/>,
                      <div className="containerBlock">Example Query 3</div>,
                      <br/>,
                      <div className="containerBlock">Example Query 4</div>,
                      <br/>,
                      <div className="containerBlock">Example Query 5</div>,
                      <br/>,
                     ]
    function renderItem(index, key) {
        return <div key={key}>{examples[index]}</div>
    }

    return (
        <div className = 'page-container'>
            <div className="page-text">
            <h1>Examples</h1>
                <div className = 'loginblock' style={{height: '50%', top: '50%'}}>
                    <div style={{overflow: 'auto', height:'100%'}}>
                        <ReactList
                            itemRenderer={renderItem}
                            length={examples.length}
                            type='uniform'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examples;