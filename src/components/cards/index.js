import latestWork from "../../static/Data/latestWork";
// import './card.css'

const Cards = () => {
    return (
        <div>
            <div className="flex flex-col">
                {
                    latestWork.map((items) => {
                        return (
                            <div className="flex flex-col mx-5 xl:flex-row xl:w-3/4 xl:items-center xl:mx-5 mb-5 p-10 chineseBlackBg" style={{ margin: '10px auto' }}>
                                <div>
                                    <div>
                                        <h1 className="White text-2xl mb-5 xl:text-3xl">{items.title}</h1>
                                        <p className="White text-xl xl:text-2xl">{items.description}</p>
                                    </div>
                                    <div className="flex items-center gap-5 mt-5 mb-5">
                                        <img src={items.icon} width={20} alt="" />
                                        <h1 className="White text-lg">See Project</h1>
                                    </div>

                                </div>
                                <div className="">
                                    <img className="object-cover w-[100vw]" src={items.img} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        // <div className="cardContainer">
        //     <div className="cards flex flex-col items-center">
        //         {
        //             latestWork.map((cardItems) => {
        //                 return (
        //                     <div className="contentContainer flex flex-col  chineseBlackBg p-3 px-2 items-center" key={cardItems.id}>
        //                         <div className="cardContent px-12 max-sm:px-3 max-sm:pb-5 sm:px-4">
        //                             <div>
        //                                 <h1 className="White text-4xl mb-5">{cardItems.title}</h1>
        //                                 <p className="White text-lg">{cardItems.description}</p>
        //                             </div>
        //                             <div className="flex items-center gap-4 pt-3">
        //                                 <img src={cardItems.icon} width={20} alt="" />
        //                                 <h1 className="White text-lg">See Project</h1>
        //                             </div>
        //                         </div>
        //                         <img src={cardItems.img} className="flex flex-row-reverse" width={600} alt="" />
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // </div>
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
