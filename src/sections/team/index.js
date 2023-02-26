import React from 'react'
import TeamData from '../../static/Data/teamData'
import './team.css'

const Team = () => {
    return (
        <div className='TeamContainer'>
            <div>
                <div className='flex items-center justify-between mx-20 mt-32'>
                    <h1 className='chineseBlack text-4xl break-words'>Meet Multi-Talented people who are passionate about <br /> their craft</h1>
                    <button className='viewTeam GunMetalBg White text-xl'>Meet The Team</button>
                </div>
                <div className='teamContainer flex justify-center mt-20'>
                    {
                        TeamData.map((team) => {
                            return (
                                <div className='teamImage' key={team.id}>
                                    <div className='teamContent'>
                                        <h1 className='White teamName text-4xl'>{team.name}</h1>
                                        <h2 className='White'>{team.title}</h2>
                                    </div>
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