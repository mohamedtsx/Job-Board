import { 
    baseBtn, baseMiniBtn,
    addToFavoritesBtn, 
    removeJobBtn,
} from "./button.style";

export const BUTTON_TYPES = {
    base: 'base-btn',
    addToFavorites: 'favorites-btn',
    removeJob: 'remove-job-btn',
    baseMini: 'base-mini'
}

const getButton = (buttonType = BUTTON_TYPES.base) => ({
    [BUTTON_TYPES.base]: baseBtn,
    [BUTTON_TYPES.addToFavorites]: addToFavoritesBtn,
    [BUTTON_TYPES.removeJob]: removeJobBtn,
    [BUTTON_TYPES.baseMini]: baseMiniBtn
}[buttonType]);


const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button;