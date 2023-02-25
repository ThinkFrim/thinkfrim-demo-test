import React from 'react'
import TeamData from '../../static/Data/teamData'

const Team = () => {
    return (
        <div className='TeamContainer'>
            <div>
                <div className='flex items-center justify-between mx-20 mt-32'>
                    <h1 className='chineseBlack text-4xl break-words'>Meet Multi-Talented people who are passionate about <br /> their craft</h1>
                    <button className='viewTeam'>Meet The Team</button>
                </div>
                <div className='teamContainer flex justify-center mt-20'>
                    {
                        TeamData.map((team) => {
                            return (
                                <div className='' key={team.id}>
                                    <img src={team.img} alt="" width={500} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Team