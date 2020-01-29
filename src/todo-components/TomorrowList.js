import React from 'react';

class TomorrowList extends React.Component {
    render() {
        return (
            <div class="do-tomorrow-list">
                    <p style={{ color: '#1e836c;' }}>Today's undone todo's will move to tomorrow.</p>
                    <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: '#1e836c', width: '100%' }} />
                    <p style={{ color: '#1e836c;' }}>Add upcoming and future todo's to tomorrow's list.</p>
                    <hr style={{ borderWidth: '0.5px', borderStyle: 'solid', color: '#1e836c', width: '100%' }} />
                </div>
        );
    }
}

export default TomorrowList;