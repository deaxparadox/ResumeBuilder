import React from 'react';



class CHeader extends React.Component {
    inside(): React.ReactNode {
        return (
            <h1>This is header</h1>
        )
    }

    render(): React.ReactNode {
        const Inside: React.ReactNode = this.inside()
        return (
            <div className='header'>
                {Inside}
            </div>
        )
    }
}

export default CHeader;