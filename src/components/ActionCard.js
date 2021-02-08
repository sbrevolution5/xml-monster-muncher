import { Component } from "react";
export default class ActionCard extends Component {
    render() {
        return (
            <div>
            {/* remove buton for each card  */}
        <div className="card text-white bg-dark mb-3 d-inline-block">
            <div className="card-header">Action Title</div>
            <div className="card-body">
                <h4 className="card-title">This needs inputs</h4>
                <p className="card-text">Action Description Needs a remove button!</p>
            </div>
        </div>
        </div>
        )
    }
}