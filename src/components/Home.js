import React, {useState} from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Done from "./Done";
import Todo from "./Todo";

const Home = props => {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;

    const tabNameToIndex = {
      0: "todo",
      1: "done"
    };
  
    const indexToTabName = {
      todo: 0,
      done: 1
    };



    const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
      };

    return (
        <>
        <AppBar position="static" variant="outlined" color="default">
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Todo" />
            <Tab label="Done" />
          </Tabs>
        </AppBar>
        {selectedTab === 0 && <Todo />}
        {selectedTab === 1 && <Done />}
            
        </>
    )
}

export default Home
