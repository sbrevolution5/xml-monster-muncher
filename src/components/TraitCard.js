import { Component } from "react";

class TraitCard extends Component {
    render() {
        return (
            <div>
                {/* remove buton for each card  */}
                <div className="card text-white bg-dark mb-3 d-inline-block" >
                    <div className="card-header">Trait Card</div>
                    <div className="card-body">
                        <div class="form-group">
                            <label htmlFor="traitTitle"></label>
                            <input type="text" class="form-control bg-dark" name="title" id="traitTitle" aria-describedby="helpId" placeholder="" />
                            <small id="helpId" class="form-text text-muted">Name of trait</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="traitDescription"></label>
                            <textarea className="form-control bg-dark" name="description" id="traitDescription" placeholder="describe trait here" rows="3"></textarea>
                        </div>
                        <button type="button" className="btn btn-danger">Remove Trait</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default TraitCard;