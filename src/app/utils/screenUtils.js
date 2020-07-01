import { dimensions } from "../styles/base";


export function isSmallScreen() {
    return dimensions.fullWidth < 350 && dimensions.fullHeight < 600;
}