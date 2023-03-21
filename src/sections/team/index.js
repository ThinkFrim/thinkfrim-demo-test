import TeamData from '../../static/Data/teamData'
// import './team.css'

const Team = () => {
    return (
        <div className='TeamContainer' id='Team'>
            <div className='pt-20'>
                <div className='flex max-sm:flex-col items-center justify-between mx-20'>
                    <h1 className='chineseBlack text-4xl max-sm:text-[2rem] max-sm:py-[1rem] max-sm:w-[80vw] max-sm:text-center md:text-[2rem] sm:text-[2rem]'>Meet Multi-Talented people who are passionate about <br class="hidden lg:inline" /> their craft</h1>
                    <button className='viewTeam p-[1rem] rounded-[20px] GunMetalBg White 2xl:max-w-[14%] md:text-[1rem] md:w-[30%] sm:w-[20%]'>Meet The Team</button>
                </div>
                <div className='mt-20'>
                    <div className='teamContainer flex max-sm:flex-col justify-center mt-16'>
                        {
                            TeamData.map((team) => {
                                return (
                                    <div className='teamImage relative before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-opacity-60 before:bg-black' key={team.id}>
                                        <div className='teamContent absolute top-[50%] left-[40%] max-sm:left-[34%] sm:left-[30%] md:left-[30%] text-center'>
                                            <h1 className='White text-4xl sm:text-2xl 2xl:text-4xl md:text-3xl'>{team.name}</h1>
                                            <h2 className='White text-[25px] md:text-[20px] font-light'>{team.title}</h2>
                                        </div>
                                        <img className='object-cover object-center' src={team.img} alt="" width={500} />
                                    </div>

                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team