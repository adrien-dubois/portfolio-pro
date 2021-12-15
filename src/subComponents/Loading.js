import styled from "styled-components";
import React, {useState} from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = css`
position: absolute;
bottom: 10%;
right: 10%;
`;

const Loading = () => {

  const loader = useState(true);

  return (
    <Box>
        <RingLoader
        color={'#000'}
        loading={loader}
        size={60}
        css={override}
        />
    </Box>
  );
};

export default Loading;
