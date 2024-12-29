import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {
  const scrollRef1 = useRef()
  const scrollRef2 = useRef()
  const scrollRef3 = useRef()

  // TODO: Implement the gsap scroll trigger
  useGSAP(
    () => {
      const boxes1 = gsap.utils.toArray(scrollRef1.current.children)
      const boxes2 = gsap.utils.toArray(scrollRef2.current.children)
      const boxes3 = gsap.utils.toArray(scrollRef3.current.children)
      // box1
      boxes1.forEach((box) => {
        gsap.to(box, {
          x: 350 * (boxes1.indexOf(box) + 2),
          overflow: 'hidden',
          rotate: 360,
          borderRadius: '100%',
          scale: 1.2,
          scrollTrigger: {
            trigger: box,
            start: ' bottom bottom',
            end: 'top 5%',
            scrub: true,
          },
        })
      })
      // box2
      boxes2.forEach((box) => {
        gsap.to(box, {
          x: -370,
          rotate: 320,
          // borderRadius: '100%',
          duration: 2,
          scale: 2.5,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: box,
            start: ' bottom bottom',
            end: 'top 40%',
            scrub: true,
          },
        })
      })
      // box3
      boxes3.forEach((box) =>
        gsap.to(box, {
          x: 250,
          rotate: 360,
          borderRadius: '100%',
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: ' bottom bottom',
            end: 'top 50%',
            scrub: true,
          },
        })
      )
    },
    {
      scrollRef1,
      scrollRef2,
      scrollRef3,
    }
  )

  return (
    <main>
      <h1>GsapScrollTrigger</h1>
      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>
      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{' '}
      </p>
      <p className="mt-5 text-gray-500">
        Read more about the{' '}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{' '}
        method.
      </p>
      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>
      <div
        className="mt-20 w-full h-96 flex overflow-hidden justify-start items-center"
        ref={scrollRef1}
      >
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>{' '}
      <div
        className="mt-20 w-full h-[500px] flex overflow-hidden justify-end items-center "
        ref={scrollRef2}
      >
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>{' '}
      <div className="mt-20 w-full h-screen" ref={scrollRef3}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  )
}

export default GsapScrollTrigger
