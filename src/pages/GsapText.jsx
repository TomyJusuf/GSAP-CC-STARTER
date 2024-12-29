import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)
const GsapText = () => {
  // TODO: Implement gsap text animation
  useGSAP(() => {
    gsap.to('#text', {
      opacity: 1,
      duration: 3,
      text: `Hello World. How are you, hope you doing well.`,
      y: 0,
      ease: 'power1.out',
    })
    gsap.fromTo(
      '.para',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        delay: 4,
        stagger: 0.1,
      }
    )
  }, [])

  return (
    <main>
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{' '}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{' '}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{' '}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{' '}
        plugin.
      </p>
    </main>
  )
}

export default GsapText
