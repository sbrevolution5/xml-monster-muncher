const {Component } = require('react')

class Stats extends Component{
    render(){
        const scores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        return(

            <div className="form-group">
            <h3>Stats</h3>
                <label for="strSelector">Strength</label>
                <select id="strSelector" defaultValue="10">
                    {scores.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })}

                </select>
                <label for="dexSelector">Dexterity</label>
                <select id="dexSelector" defaultValue="10">
                    {scores.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })}

                </select>
                <label for="conSelector">Constitution</label>
                <select id="conSelector" defaultValue="10">
                    {scores.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })}

                </select>
                <label for="intSelector">Intelligence</label>
                <select id="intSelector" defaultValue="10">
                    {scores.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })}

                </select>
                <label for="wisSelector">Wisdom</label>
                <select id="wisSelector" defaultValue="10">
                    {scores.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })}

                </select>
                <label for="chaSelector">Charisma</label>
                <select id="chaSelector" defaultValue="10">
                    {scores.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })}

                </select>
        </div>
    )}
}
export default Stats