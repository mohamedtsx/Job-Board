import { JobItemSt,Info, Actions } from './job-item.style.jsx';
import Button from '../button/button.component.jsx';
import { BUTTON_TYPES } from '../button/button.component.jsx';
import {ReactComponent as Favorites} from '../../assets/favorites.svg';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


const JobItem = ({item}) => {
    const {
        company_name, company_logo,id,
        created_at,location,title,type
    } = item;

    const jobType = type === 1 ? 'full time' : 'part time';
    const jobDate = new Date(`${created_at}`).toDateString();
    
    const favoritesIconRef = useRef();

    const navigate = useNavigate();

    const goToJob = () => {
        navigate(`/job/${id}`);
    }

 
    return(
        <JobItemSt>
            <Info>
                <img src={company_logo} alt={`${company_name} logo`}></img>
                <div className='text-container'>
                    <div className='job-title-container'>
                        <h1>{title}</h1>
                        <Button className='favoriteLeft' buttonType={BUTTON_TYPES.addToFavorites}><Favorites/></Button>
                    </div>
                    <div className='highlights'>
                        <span>{company_name}</span>
                        <span>{location}</span>
                        <span>{jobType}</span>
                    </div>
                </div>
            </Info>
            <Actions>
                <div className='action-buttons'>
                    <Button className='favoriteRight' buttonType={BUTTON_TYPES.addToFavorites}><Favorites ref={favoritesIconRef}/></Button>
                    <Button buttonType={BUTTON_TYPES.baseMini} onClick={goToJob}>apply now</Button>
                </div>
                <p><span>published: {jobDate}</span></p>
            </Actions>
        </JobItemSt>
    )
}

export default JobItem;