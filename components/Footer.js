import Image from 'next/image'

const Footer = () => (
    <footer className={`relative`}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className={`bg-transparent`}>
            <path
                fill='#ffffff'
                fillOpacity='1'
                d='M0,96L30,85.3C60,75,120,53,180,74.7C240,96,300,160,360,176C420,192,480,160,540,133.3C600,107,660,85,720,96C780,107,840,149,900,186.7C960,224,1020,256,1080,240C1140,224,1200,160,1260,112C1320,64,1380,32,1410,16L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
            ></path>
        </svg>
        <div className={`absolute bottom-0 right-0 mr-8 mb-1`}>
            <Image
                src={`/aaron-gif.gif`}
                alt={'Aaron Conway'}
                layout={`fixed`}
                width={50}
                height={50}
            />
        </div>
        <div className={`absolute bottom-0 right-0 mb-1`}>
            <Image
                src={`/hamish-gif.gif`}
                alt={'Hamish Lacmane'}
                layout={`fixed`}
                width={50}
                height={50}
            />
        </div>
    </footer>
)

export default Footer
