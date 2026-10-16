<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavigationHeader from '@/components/NavigationHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProfileSection from '@/components/ProfileSection.vue'
import ProjectsGallerySection from '@/components/ProjectsGallerySection.vue'
import FooterSection from '@/components/FooterSection.vue'

gsap.registerPlugin(ScrollTrigger)

const { init, destroy } = useSmoothScroll()

let scrollCtx: gsap.Context | null = null

onMounted(() => {
  init()
  nextTick(() => {
    scrollCtx = gsap.context(() => {
      const revealElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { 
            opacity: 0, 
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })
  })
})

onUnmounted(() => {
  scrollCtx?.revert()
  destroy()
})
</script>

<template>
  <div class="bg-dots min-h-screen text-slate-900 flex flex-col justify-between selection:bg-[#5c6e9e] selection:text-white relative overflow-x-clip font-sans antialiased">
    <NavigationHeader />

    <main id="main-content" class="flex-1">
      <HeroSection />
      <div class="reveal-on-scroll">
        <ProfileSection />
      </div>
      <div class="reveal-on-scroll">
        <ProjectsGallerySection />
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
.bg-dots {
  background-color: #EAE8E3;
  background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 12px 12px; /* Increased from 4px to 12px */
}
</style>