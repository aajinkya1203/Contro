import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ActivitySummary extends Component {
    state={
        acts:[
            {id:1,path:'Notes',title:'Notes', content:'Keep a note of all your study notes, random thoughts and absolutely anything! Go ace it! *winks*', src:'notes.svg'},
            {id:2,path:'PersonalNotes',title:'Personal Notes', content:'Write all your personal emotions, information and be assured that no one can see it except you! So let\'s start joting down, shall we?', src:'remasteredPersonal.svg'},
            {id:3,path:'Reminders',title:'Reminders', content:'Never lose track of the things to do! Follow up on your meetings, gatherings, birthdays and assignments without stressing your brain too much! You got a friend in me, right?', src:'remasteredReminder.svg'},
            {id:4,path:'Leisure',title:'Entertainment', content:'Let your Assistant do more of your search part. This new feature brings exciting things to the table like lyrics search and much more... Exciting right? We know ;)', src:'leisure.svg'},
            {id:5,path:'Todos',title:'ToDo List', content:'Be it shopping list, syllabus check, or maybe to keep track of things! Can come in handy to anyone, anytime!', src:'remasteredTodo.svg'}
        ]
    }
    render() {
        const { acts } = this.state;
        return (
            <ul id="featuresInContro">
                {
                    acts && acts.map(act=>{
                        return(
                            <li key={act.id}>
                                <Link to={ require(`./${act.path}`) }>
                                    <h4 className="front">{ act.title }</h4>
                                    <img src={ require(`../../images/additional/${ act.src }`) } className="front"/>
                                    <p className="back">
                                        { act.content }
                                    </p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

        )
    }
}

export default ActivitySummary
