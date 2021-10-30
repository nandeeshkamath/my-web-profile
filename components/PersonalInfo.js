import styles from '../styles/Home.module.css'
import Image from 'next/image'

function PersonalInfo() {
    return (
        <div className={styles.maincard}>
            <div className="mx-20 mt-14 text-center">
                <Image className="rounded-full object-cover" src="/profile.jpg" width={350} height={350} layout="responsive" />
            </div>
            <h1 className="text-3xl font-bold text-white text-center tracking-wide mt-10">NANDEESH KAMATH</h1>
            <div className="text-white text-center">
                <p className="mt-4">Backend Engineer</p>
                <p className="mt-7 font-bold">Technofile . Moviebuff . Foodie . Traveller</p>
                <p className="mt-28">Contact me via</p>
                <div className="inline-block mt-4">
                    {/* <Image className="mx-6" src="/github.png" width={30} height={30} />
                    <Image src="/github.png" width={30} height={30} />
                    <Image src="/github.png" width={30} height={30} /> */}
                </div>
                <p className="mt-5">Find me on</p>
            </div>
        </div>
    )
}

export default PersonalInfo
