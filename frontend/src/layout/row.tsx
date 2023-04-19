import React from "react";

class CRow extends React.Component {
    left(): React.ReactNode {
        return (
            <div>
                This is left.
            </div>
        )
    }
    content(): React.ReactNode {
        return (
            <div>
                This is content.
            </div>
        )
    }
    right(): React.ReactNode {
        return (
            <div>
                This is right.
            </div>
        )
    }

    render(): React.ReactNode {
        const Left: React.ReactNode = this.left();
        const Content: React.ReactNode = this.content();
        const Right: React.ReactNode = this.right();
        return (
            <div className="row">
                <div className="left">
                    {Left}
                </div>
                <div className="content">
                    {Content}
                </div>
                <div className="right">
                    {Right}
                </div>
            </div>
        )
    }

}

export default CRow;