import React, { Component } from 'react'

class Features extends Component {
    state= {
        features:[
            {id:1, title:'Your details are safe like never before!', content:'Using our highly Crytpographic security, we make it harder for any anonymous person trying to access your data! So rest easy!', src:'hack1ReMas.svg'},
            {id:2, title:'Unleash your inner writer by having your Personal Notes secured!', content:'Introducing the first ever, Personal Notes in Contro. Write all your personal emotions, information and be assured that no one can see it except you! So let\'s start joting down, shall we?', src:'hack2.svg'},
            {id:3, title:'The Mandatory section - Notes', content:'Keep a note of all your study notes, random thoughts and absolutely anything!', src:'notes.svg'},
            {id:4, title:'Never forget anything with the help of our ToDo List', content:'Be it shopping list, syllabus check, or maybe to keep track of things! Can come in handy to anyone, anytime!', src:'notification.gif'},
            {id:5, title:'Want Contro to help you out with casual things?', content:'Don\'t worry, we got you! Introducing Leisure Section where you can get your Assistant do more of your search part. Exciting right? We know ;)', src:'leisure.svg'},
        ]
    }
    render() {
        const { features }=this.state;
        return (
            <div className="container featureContainer">
                {
                    features && features.map(feature=>{
                        return(
                            <div className="card z-depth-0" key={ feature.id }>
                                <div className="card-content">
                                    <img src= {require(`../../images/${ feature.src }`)} alt="feature Cover" />
                                    <h4 className="card-title">{ feature.title }</h4>
                                    <p>{ feature.content }</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default Features
