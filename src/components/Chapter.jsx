import { ChapterItems } from "./ChapterItems"
export default function Chapter() {
    return (
        <section id="chapter" className="container lg:px[7%] mt-24 lg:mt-32">
            <div className="text-center mb-8">
                <h2 className='text-2xl md:text-4xl font-semibold'>GDSC Chapter</h2>
                <p className='text-base md:text-lg max-w-xl mx-auto mt-2'>Universitas Sriwijaya, Sumatra Selatan - Indonesia.</p>
            </div>
            <div className="grid md:grid-cols-2 mb-12 gap-8">
                {ChapterItems.map((item) => (
                    <div className=" h-48 aspect-video overflow-hidden rounded-lg" key={item.image}>
                        <img src={item.image} alt={item.image} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <iframe
                src="https://www.youtube.com/embed/XVRRgBjV1kI"
                title="YouTube video player"
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </section>

    )

}
