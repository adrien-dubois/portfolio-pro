import React, {useState, useEffect} from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const override = css`
position: absolute;
bottom: 10%;
right: 10%;
`

const Loading = () => {

    let [loading] = useState(true);


    return (
        <Loading>
            {
                loading ?
                <RingLoader 
                color={'#000'} 
                loading={loading}  
                size={60}
                css={override}
                />

                :

                ""
            }
        </Loading>
    )
}

export default Loading;