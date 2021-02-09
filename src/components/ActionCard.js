import { Component } from "react";
export default class ActionCard extends Component {
    render() {
        return (
            <div>
            {/* remove buton for each card  */}
        <div className="card text-white bg-dark mb-3 d-inline-block">
            <div className="card-header">Action Card</div>
            <div className="card-body">
                <div className="form-group">
                  <label htmlFor="actionTitle"></label>
                  <input type="text" className="form-control bg-dark" name="title" id="actionTitle" aria-describedby="helpId" placeholder=""/>
                  <small id="helpId" className="form-text text-muted">Name of action</small>
                </div>
                <div className="form-group">
                  <label htmlFor="actionDescription"></label>
                  <textarea className="form-control bg-dark" name="description" id="actionDescription" placeholder="describe aciton here" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-danger">Remove Action</button>
            </div>
        </div>
        </div>
        )
    }
}