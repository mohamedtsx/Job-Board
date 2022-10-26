import { JobItemSt,Info, Actions } from './job-item.style.jsx';
import Button from '../button/button.component.jsx';
import { BUTTON_TYPES } from '../button/button.component.jsx';
import {ReactComponent as Favorites} from '../../assets/favorites.svg';
import { useNavigate } from 'react-router-dom';

const JobItem = ({item}) => {
    const {
        company_name, company_logo,id,
        created_at,location,title,type
    } = item;
    const jobType = type === 1 ? 'full time' : 'part time';
    const jobDate = new Date(`${created_at}`).toLocaleDateString();

    const navigate = useNavigate();
    const goToJob = () => {
        navigate(`/${id}`);
    }

    return(
        <JobItemSt onClick={goToJob}>
            <Info>
                <img src={company_logo} alt={`${company_name} logo`}></img>
                <div className='text-container'>
                    <h1>{title}</h1>
                    <div className='highlights'>
                        <span>{company_name}</span>
                        <span>{location}</span>
                        <span>{jobType}</span>
                    </div>
                </div>
            </Info>
            <Actions>
                <Button buttonType={BUTTON_TYPES.addToFavorites}><Favorites/></Button>
                <Button buttonType={BUTTON_TYPES.baseMini}>apply now</Button>
                <span>published: {jobDate}</span>
            </Actions>
        </JobItemSt>
    )
}

export default JobItem;