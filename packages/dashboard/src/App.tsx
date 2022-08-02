import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

// @ts-ignore-next-line
import Accounting from "accounting/Accounting";
// @ts-ignore-next-line
import useDashboardStore from "dashboard/useDashboardStore";

const App = () => {
  const [name, setName] = useState("");
  // @ts-ignore-next-line
  const { user, setUser } = useDashboardStore((state) => state);

  return (
    <Wrapper>
      <InputWrapper>
        <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
        <button onClick={() => setUser({ name })}>Set Name</button>
      </InputWrapper>
      <div>
        Current user's name according to the dashboard: {user?.name}
      </div>
      <Accounting />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

ReactDOM.render(<App />, document.getElementById("app"));
