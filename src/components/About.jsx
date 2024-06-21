import coreTeamNow from '../assets/images/core-team-now.png'
export default function About() {
    return (
        <section id='about' className="container lg:px-[7%] mt-24 lg:mt-32">
            <div className="flex flex-col-reverse lg:flex-row gap-8">
                <div className="space-y-2">
                    <h2 className='text-xl lg:text-3xl font-semibold'>Welcome to the Google Developer Student Clubs Chapter Universitas Sriwijaya Official Page!</h2>
                    <p className='text-base lg:text-lg'>Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. GDSC Universitas Sriwijaya has been established since 2018 and continues to have a positive impact among developer students at the university.</p>
                </div>
                <div className="h-64 lg:h-80 lg:aspect-[5/4] rounded-lg">
                    <img src={coreTeamNow} alt="Foto Bersama" className='w-full h-full object-cover rounded-lg' />
                </div>
            </div>
        </section>
    )
}
