import { Component } from "react";
export default class ActionCard extends Component {
    render() {
        return (
            <div>
            {/* remove buton for each card  */}
        <div className="card text-white bg-dark mb-3 d-inline-block">
            <div className="card-header">Action Card</div>
            <div className="card-body">
                <div class="form-group">
                  <label for="actionTitle"></label>
                  <input type="text" class="form-control bg-dark" name="title" id="actionTitle" aria-describedby="helpId" placeholder=""/>
                  <small id="helpId" class="form-text text-muted">Name of action</small>
                </div>
                <div className="form-group">
                  <label for="actionDescription"></label>
                  <textarea className="form-control bg-dark" name="description" id="actionDescription" placeholder="describe aciton here" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-danger">Remove Action</button>
            </div>
        </div>
        </div>
        )
    }
}