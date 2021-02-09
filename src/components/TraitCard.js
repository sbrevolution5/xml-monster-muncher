import { Component } from "react";

class TraitCard extends Component {
    render() {
        return (
            <div>
                {/* remove buton for each card  */}
            <div className="card text-white bg-dark mb-3 d-inline-block" >
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Default Trait Card</h4>
                    <p className="card-text">Needs a remove button!</p>
                    <button type="button" class="btn btn-danger">Remove Trait</button>
                </div>
            </div>
            </div>
        )
    }
}
export default TraitCard;