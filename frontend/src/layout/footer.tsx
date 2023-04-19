import React from 'react';



class CFooter extends React.Component {
    inside(): React.ReactNode {
        return (
            <h1>This is header</h1>
        )
    }

    render(): React.ReactNode {
        const Inside: React.ReactNode = this.inside()
        return (
            <div className='footer'>
                {Inside}
            </div>
        )
    }
}

export default CFooter;