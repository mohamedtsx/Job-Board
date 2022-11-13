
import { 
    baseBtn, baseMiniBtn,
    addToFavoritesBtn, 
    removeJobBtn,
    dropdownToggleBtn
} from "./button.style";

export const BUTTON_TYPES = {
    base: 'base-btn',
    addToFavorites: 'favorites-btn',
    removeJob: 'remove-job-btn',
    baseMini: 'base-mini',
    dropdownBtn: 'dropdown-toggle'
}

const getButton = (buttonType = BUTTON_TYPES.base) => ({
    [BUTTON_TYPES.base]: baseBtn,
    [BUTTON_TYPES.addToFavorites]: addToFavoritesBtn,
    [BUTTON_TYPES.removeJob]: removeJobBtn,
    [BUTTON_TYPES.baseMini]: baseMiniBtn,
    [BUTTON_TYPES.dropdownBtn]: dropdownToggleBtn
}[buttonType]);



const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);

    const type = otherProps.type || 'button';
    
    return(
        <CustomButton type={type} {...otherProps}>{children}</CustomButton>
    )
}

export default Button;