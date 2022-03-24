const OrbLight = (props) => {

    switch (props.trafficLight) {
        case 'green':
            return <div className="orb-light orb-light--ok"></div>
        case 'yellow':
            return <div className="orb-light orb-light--warning"></div>
        case 'red':
            return <div className="orb-light orb-light--alert"></div>
        default:
            break;
    }

    return (
        <div className={`orb-light ${props.trafficLight}`} />
    );
}

export default OrbLight;