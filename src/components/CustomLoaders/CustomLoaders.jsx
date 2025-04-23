import RingLoader from "react-spinners/RingLoader";
import {RingLoaderStyled } from "./CustomLoaders.styled";



export const Loading = () => {
    return (
        <RingLoaderStyled>
            <RingLoader 
                color={"#36d7b7"} 
                loading = {true} 
                size={150}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};
