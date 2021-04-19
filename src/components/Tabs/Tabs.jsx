import * as React from "react";
import { Tabs, Tab } from "baseui/tabs-motion";

export default ({
  tabs = []
}) => {
  const [activeKey, setActiveKey] = React.useState(tabs[0].key);
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
      activateOnFocus
    >
      {tabs.map((tab, i) => {
        return (
          <Tab
          overrides={{
            Tab: {
              style: ({ $theme }) => ({
                backgroundColor: 'transparent'
              })
            }
          }}    
          title={tab.title} key={tab.key} />
        )
      })}
    </Tabs>
  );
}