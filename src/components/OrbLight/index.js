const OrbLight = (props) => {

    switch (props.trafficLight) {
        case 'green':
            return <div className="orb-light orb-light--ok"></div>
            break;
        case 'yellow':
            return <div className="orb-light orb-light--warning"></div>
            break;
        case 'red':
            return <div className="orb-light orb-light--alert"></div>
            break;
        default:
            break;
    }

    return (
        <div className={`orb-light ${props.trafficLight}`} />
    );
}

export default OrbLight;