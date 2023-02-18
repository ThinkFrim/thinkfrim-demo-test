import aboutService from '../../static/Data/aboutData';

const Cards = () => {
    return (
        <div className='cardContainer'>
            <div className='cards flex justify-center'>
                {
                    aboutService.map((items) => {
                        return (
                            <div className='content'>
                                <img src={items.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;