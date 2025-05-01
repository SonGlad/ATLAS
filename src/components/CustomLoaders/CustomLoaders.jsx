import PuffLoader from "react-spinners/PuffLoader";
import { RingLoaderStyled } from "./CustomLoaders.styled";



export const Loader = () => {
    return (
        <RingLoaderStyled>
            <PuffLoader 
                color={"#877356"} 
                loading = {true} 
                size={250}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};
