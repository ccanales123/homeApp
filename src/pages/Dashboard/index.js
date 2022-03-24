import { Content } from "carbon-components-react";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Tower from '../../components/Tower';
import TowerCard from '../../components/TowerCard';

const Dashboard = () => {
    return (
        <div className="container">
            <Header />
            <Content>
                <TowerCard>
                    <Tower />
                </TowerCard>
                <TowerCard>
                    <Tower />
                </TowerCard>
                <TowerCard>
                    <Tower />
                </TowerCard>
            </Content>
        </div>
    );
}

export default Dashboard;