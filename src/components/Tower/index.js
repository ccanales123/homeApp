import OrbLight from "../OrbLight";

const Tower = () => {
    return (
        <div>
            <div className="tower-title">
                <h3>PM 101</h3>
            </div>
            <ul className="tower-metrics">
                <div className="tower-metrics-status">
                    <li>Internal</li>
                    <OrbLight trafficLight='red' />
                </div>
                <div className="tower-metrics-status">
                    <li>External</li>
                    <OrbLight trafficLight='yellow' />
                </div>
                <div className="tower-metrics-status">
                    <li>Risk Level</li>
                    <OrbLight trafficLight='green' />
                </div>
                <div className="tower-metrics-status">
                    <li>Stakeholder analysis</li>
                    <OrbLight trafficLight='yellow' />
                </div>
            </ul>
        </div>
    );
}

export default Tower;