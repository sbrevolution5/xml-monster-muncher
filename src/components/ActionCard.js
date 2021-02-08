import { Component } from "react";
export default class ActionCard extends Component {
    render() {
        return (
            <div>
            {/* remove buton for each card  */}
        <div className="card text-white bg-dark mb-3 d-inline-block">
            <div className="card-header">Header</div>
            <div className="card-body">
                <h4 className="card-title">Default Action Card</h4>
                <p className="card-text">Needs a remove button!</p>
            </div>
        </div>
        </div>
        )
    }
}