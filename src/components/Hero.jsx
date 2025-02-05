import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/images/mypic01.jpg"
import { motion } from "framer-motion"

const container = (delay) =>({
    hidden : { x : -100, opacity : 0 },
    visibility : {
                x : 0, 
                opacity : 1,
                transition : { duration: 1, delay: delay }
            }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 flex items-center">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visibility"                    
                    className="pb-16 text-6xl font-thin tracing-tight lg:mt-16 lg:text-8xl">
                        Irshad Schowrai
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visibility"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Software Engineer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visibility"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
                <motion.img 
                initial = {{ x : 100, opacity : 0 }}
                animate = {{x : 0, opacity : 1}}
                transition = {{ duration: 1, delay: 1.2 }}
                className="w-full h-auto max-w-[460px] rounded-2xl"  src={profilePic} alt="Irshad Ahmed Schowrai" />
            </div>
        </div>
    </div>
  )
};

export default Hero
