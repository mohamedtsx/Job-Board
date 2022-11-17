import './loading.style.css';


const Loading = () => {
    // [ 0 : 0.5 : 4 ] => nothing, loader, problem 
    


    return(
        <div className='loader-container'>

            <svg className='loader-svg'>
                <circle cx='70' cy='70' r='70'></circle>
            </svg>
        </div>

    )
}

export default Loading;