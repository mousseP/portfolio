import { shallowRef } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenisInstance = shallowRef<Lenis | null>(null)

export function useSmoothScroll() {
  let tickerFn: ((time: number) => void) | null = null

  const init = () => {
    if (typeof window === 'undefined') return
    if (lenisInstance.value) return lenisInstance.value

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      autoResize: true,
    })

    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    tickerFn = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)

    lenisInstance.value = lenis
    return lenis
  }

  const scrollTo = (
    target: string | HTMLElement, 
    options?: { offset?: number; duration?: number; immediate?: boolean }
  ) => {
    if (!lenisInstance.value) {
      if (typeof target === 'string') {
        const el = document.querySelector(target)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
      return
    }

    lenisInstance.value.scrollTo(target, {
      offset: options?.offset ?? -40,
      duration: options?.duration ?? 1.1,
      immediate: options?.immediate ?? false,
    })
  }

  const destroy = () => {
    if (tickerFn) {
      gsap.ticker.remove(tickerFn)
      tickerFn = null
    }
    if (lenisInstance.value) {
      lenisInstance.value.destroy()
      lenisInstance.value = null
    }
  }

  return {
    lenis: lenisInstance,
    init,
    scrollTo,
    destroy,
  }
}
