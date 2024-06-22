import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer'
//motion 
import { fadeIn } from '../variants'
import { motion } from 'framer-motion';


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section' id='about' ref={ref} >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*image */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-darker bg-top'>
        </motion.div>
        {/*text*/}
        <motion.div variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} className='flex-1'>
          <h2 className='h2 text-accent '>About me.</h2>
          <h3 className='h3 mb-4 '>I'm a Freelance Full-stack Developer
          </h3>
          <p className='mb-6 text-blue-50'>I'm passionate about building scalable, accessible, and user-friendly interfaces.
            I'm always looking for new challenges and opportunities to grow as a developer.</p>

          <p className='mb-6 text-blue-50'>I am passionate about technology and problem-solving, and I thrive on tackling new challenges and learning continuously.
          </p>
          <br />
          {/*stats*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of<br />
                Experience<br />
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                0+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects<br />
                Completed
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                0+
              </div>
              <div className='font-primary text-sm tracking-[2px'>
                statisfied<br />
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center text-accent '>
            <button className='btn btn-lg'>Contact me </button>
            <a herf='#' className='text-gradient btn-link'> My Protfolio
            </a>
          </div>

        </motion.div>
      </div>
    </div>
  </section>;
  // id is not working
};

export default About;
