import React, { Component } from 'react';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

class Reminders extends Component {
    state={
        
    }
    render() {
        toaster.notify("Hello!")
        return (
            <div>

            </div>
        )
    }
}

export default Reminders
