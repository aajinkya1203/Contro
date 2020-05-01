import React from 'react'
import Navbar from '../../auth/Navbar';

const NoteDetail=(props)=> {
    const id = props.match.params.id;
    return (
        <div>
            <Navbar />
            <div className="container section songDetail">
            {/* <img src={ abstractBG } className="mainBG" alt="Cover for Dashboard"/> */}
                <div className="card z-depth-0">
                    <div className="card-content black-text">
                        <span className="card-title">{ id }</span>
                        <h6 className="artists">Title</h6>
                        <p className="songInfo">
                            Body
                        </p>
                    </div>

                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Aajinkya</div>
                        <div>Posted on 7:29PM</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NoteDetail
