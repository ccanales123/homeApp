import React from "react";
import { Dropdown, Button, Content} from "carbon-components-react";
import {
    Filter20,
} from '@carbon/icons-react';

const items = [
    {
        id: 'option-0',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 'option-1',
        text: 'Option 1',
    }
];

export default function Panel() {

    const handleChange = () => {
        console.log("dddd")
    }


    return (
        <div>
            <Filter20/><h4>Filters</h4>
            <div style={{ padding:"20px" }}>
                <Dropdown
                    id="default"
                    titleText="Practice"
                    label="Dropdown menu options"
                    items={items}
                    itemToString={(item) => (item ? item.text : '')}
                    onChange={handleChange}
                />
            </div>
            <div style={{ padding:"20px" }}>
                <Dropdown
                    id="default"
                    titleText="Vertical"
                    label="Dropdown menu options"
                    items={items}
                    itemToString={(item) => (item ? item.text : '')}
                    onChange={handleChange}
                />
            </div>
            <div style={{ padding:"20px" }}>
                <Dropdown
                    id="default"
                    titleText="Account"
                    label="Dropdown menu options"
                    items={items}
                    itemToString={(item) => (item ? item.text : '')}
                    onChange={handleChange}
                />
            </div>
            <div style={{ padding:"20px" }}>
                <Dropdown
                    id="default"
                    titleText="Project"
                    label="Dropdown menu options"
                    items={items}
                    itemToString={(item) => (item ? item.text : '')}
                    onChange={handleChange}
                />
            </div>
            <div style={{ padding:"20px" }}>
            <Button  kind="primary">Filter</Button>
            </div>
        </div>


    )
}

