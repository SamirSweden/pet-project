import styles from "./Stylex.module.css"
import  Link from "next/link"
import { Button } from "@heroui/button"


const Banner = () => {
    return(
        <>
            <div className={styles.banner}>
                <div className="container">
                    <div className={styles.banner__wrap}>
                        <div className={styles.banner__width}>
                            <span className="text-yellow-400 text-lg capitalize">3D game Dev </span>
                            <h3 className={styles.banner__h3}>
                                Work that we produce for our clients
                            </h3>
                            <p className={styles.banner__p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            <div className={styles.banner__btns}>
                                <Link href={'/'} className="">
                                    <Button size="lg" color="warning">Read more</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
