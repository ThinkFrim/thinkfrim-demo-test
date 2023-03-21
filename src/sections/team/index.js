import TeamData from '../../static/Data/teamData'
// import './team.css'

const Team = () => {
    return (
        <div className='TeamContainer' id='Team'>
            <div className='pt-20'>
                <div className='flex max-sm:flex-col items-center justify-between mx-20'>
                    <h1 className='chineseBlack 2xl:text-4xl max-sm:text-[2rem] max-sm:py-[1rem] max-sm:w-[80vw] max-sm:text-center md:text-[2rem]'>Meet Multi-Talented people who are passionate about <br class="hidden lg:inline" /> their craft</h1>
                    <button className='viewTeam p-[1rem] 2xl:w-[10vw] rounded-[20px] GunMetalBg White md:text-[1rem] md:w-[20%]'>Meet The Team</button>
                </div>
                <div className='mt-20'>
                    <div className='teamContainer flex flex-col md:flex-row justify-center mt-16'>
                        {
                            TeamData.map((team) => {
                                return (
                                    <div className='teamImage relative before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-opacity-60 before:bg-black' key={team.id}>
                                        <div className='teamContent absolute top-[50%] left-[40%] max-sm:left-[34%] sm:left-[30%] md:left-[30%] text-center'>
                                            <h1 className='White text-4xl sm:text-2xl 2xl:text-4xl md:text-3xl'>{team.name}</h1>
                                            <h2 className='White text-[25px] md:text-[20px] font-light'>{team.title}</h2>
                                        </div>
                                        <img className='w-full md:w-screen' src={team.img} alt="" />
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