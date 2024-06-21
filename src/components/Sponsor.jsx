import { SponsorItems } from "./SponsorItems"
export default function Sponsor() {
    return (
        <section id='sponsor' className="container lg:px[7%] mt-24 lg:mt-32">
            <div className="text-center mb-8">
                <h2 className='text-2xl md:text-4xl font-semibold'>Partners</h2>
                <p className='text-base md:text-lg'>Proudly presents our official partners.</p>
            </div>
            <div className="flex justify-center flex-wrap gap-10">
                {SponsorItems.map((item) => (
                    <div className="flex justify-center items-center h-24 lg:h-40  w-auto" key={item.image}>
                        <img src={item.image} alt={item.img} className="w-full h-full" />
                    </div>
                ))}
            </div>
        </section>
    )
}
