
import CommonHeader from "@/app/components/common/common_section";
import Gallery from "@/app/components/landing/home/gallery";
import Image from "next/image";
import Link from "next/link";


export default function GalleryArcEngineering() {
    return (
        <main className="">
            <CommonHeader heading="Services" subheading={"Engineering"} />
            <div className="container mt-6 md:mt-10 xl:mt-16">
                <Image
                    src="/service/service.jpg"
                    width={1000}
                    height={1000}
                    alt="Background"
                    className="w-full h-[215px]"
                />
                <div className="mt-5 md:mt-8 xl:mt-10">
                    <p className="max-w-[554px]">
                        Below you will find some of our latest engineering projects. <Link className="text-blue-600" href={"/contact_us"}> Call us</Link> to find out how we can assist you!
                    </p>
                </div>
            </div>
            <div className="mt-6 md:mt-8 xl:mt-11">
                <Gallery />
            </div>
        </main>
    );
}
