import React, { useState } from "react";
import {
    Settings20,
    FilterEdit20,
} from '@carbon/icons-react';
import {
    Header,
    HeaderName,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderPanel
} from "carbon-components-react/lib/components/UIShell";
import Panel from '../Panel';

const HeaderComponent = () => {

    const toggleSwitch = () => {
        SetswitchCollapsed(!switchCollapsed);
    }

    const [switchCollapsed, SetswitchCollapsed] = useState(false);

    return (
        <Header aria-label="IBM Platform Name" className="App-header">
            <HeaderName href="#" prefix="HOME">
                App
            </HeaderName>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => { }}>
                    <Settings20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                    aria-label="Notifications"
                    onClick={toggleSwitch}
                >
                    <FilterEdit20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            <HeaderPanel
                aria-label="Header Panel"
                expanded={switchCollapsed}
            ><Panel />
            </HeaderPanel>
        </Header>
    )
}

export default HeaderComponent;