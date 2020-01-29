import React from 'react';



class YesterdayList extends React.Component {
    render() {

        // let styles = {           
        // };

        return (
            <div class="done-list">
                <p style={{ textDecorationLine: 'line-through', color: 'grey' }}>Yesterday's done todo's are marked done!</p>
                <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: 'grey', width: '100%' }} />
                <p style={{ color: 'grey' }}>Undone todos move to today's todo list.</p>
                <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: 'grey', width: '100%' }} />
            </div>
        );
    }
}

export default YesterdayList;
