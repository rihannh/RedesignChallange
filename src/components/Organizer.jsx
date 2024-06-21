import { TeamItems } from "./TeamItems"
export default function Organizer() {
    return (
        <section id="organizer" className="container lg:px[7%] mt-24 lg:mt-32">
            <div className="text-center mb-8">
                <h2 className='text-2xl md:text-4xl font-semibold'>Organizer</h2>
                <p className='text-base md:text-lg max-w-xl mx-auto mt-2'>Meet the organizers behind GDSC Universitas Sriwijaya. Get to know the team working hard to make this chapter unforgettable!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7">
                {TeamItems.map((item) => (
                    <div className="flex items-center justify-center flex-col text-center" key={item.name}>
                        <div className="w-32 rounded-full overflow-hidden" >
                            <img src={item.image} alt="" className="w-ful h-full object-cover" />
                        </div>
                        <div className="pt-3">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
