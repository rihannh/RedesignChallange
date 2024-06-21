import { EventItems } from "./EventItems"
import ButtonGDSC from "./ButtonGDSC"

export default function UpcomingEvents() {
    return (
        <section id="upcomingEvents" className="container lg:px-[7%] mt-24 lg:mt-32">
            <div className="space-y-2">
                <div className="text-center mb-8">
                    <h2 className='text-2xl md:text-4xl font-semibold'>Upcoming Events</h2>
                    <p className='text-base md:text-lg'>Enhance yourself by attending our events led by experts</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {EventItems.map((item) => (
                        <div className="shadow-md pb-3 rounded-xl cursor-pointer hover:scale-110 duration-300" key={item.name}>
                            <div className="text-center overflow-hidden relative h-64 rounded-t-xl">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover z-0" />
                                <p className="z-10 absolute bottom-0 text-white bg-red w-full py-1.5 font-medium text-sm">{item.time}</p>
                            </div>
                            <div className=" px-3">
                                <p className=" bg-yelllow bg-opacity-20 flex mt-2 p-1.5 w-fit text-xs font-medium text-black rounded-md">{item.type}</p>
                                <h3 className="font-semibold mt-1">{item.name}</h3>
                                <p className="text-sm mt-3">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center pt-6">
                    <ButtonGDSC text="Load More" />
                </div>
            </div>
        </section >
    )
}
