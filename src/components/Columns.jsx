import React from 'react'
import styled from 'styled-components'

const AssigneeColumns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const Columns = ({ children }) => <AssigneeColumns>
  {children}
</AssigneeColumns>

export default Columns
