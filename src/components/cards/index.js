import latestWork from "../../static/Data/latestWork";
import './card.css'

const Cards = () => {
    return (
        <div className="cardContainer">
            <div className="cards flex flex-col items-center">
                {
                    latestWork.map((cardItems) => {
                        return (
                            <div className="contentContainer flex chineseBlackBg p-3 px-2 items-center" key={cardItems.id}>
                                <div className="cardContent px-12">
                                    <div>
                                        <h1 className="White text-4xl mb-5">{cardItems.title}</h1>
                                        <p className="White text-lg">{cardItems.description}</p>
                                    </div>
                                    <div className="flex items-center gap-4 pt-3">
                                        <img src={cardItems.icon} width={20} alt="" />
                                        <h1 className="White text-lg">See Project</h1>
                                    </div>
                                </div>
                                <img src={cardItems.img} className="w" width={600} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        // <div className="cardContainer">
        //     <div className="cards">
        //         {latestWork.map((items) => {
        //             return (
        //                 <div className="contentHolder" >
        //                     <div className="cardContent">
        //                     <div className="details">
        //                         <h1 className="White title">{items.title}</h1>
        //                         <p>{items.description}</p>
        //                         <div className="flex items-center gap-3 see-projects">
        //                             <img src={items.icon} alt="" />
        //                             <h1>See Project</h1>
        //                         </div>
        //                         </div>
        //                     </div>
        //                     {/* <div> */}
        //                     {/* </div> */}
        //                         <img className="image" src={items.img} alt="" />
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </div>
    );
};

export default Cards;
