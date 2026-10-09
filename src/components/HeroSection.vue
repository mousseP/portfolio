<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { owner } from '@/data/owner'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { ArrowDown } from '@lucide/vue'
import gsap from 'gsap'

const { scrollTo } = useSmoothScroll()

const isSelected = ref(true)

function toggleSelection() {
  isSelected.value = !isSelected.value
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(
    '.hero-headline-item',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.85, stagger: 0.15 }
  )
  .fromTo(
    '.hero-card-item',
    { opacity: 0, scale: 0.94, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 0.9 },
    '-=0.5'
  )
  .fromTo(
    '.hero-footer-item',
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
    '-=0.4'
  )
})
</script>

<template>
  <section id="hero" class="relative pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <div class="lg:col-span-8 flex flex-col justify-center select-none">
        
        <div class="hero-headline-item flex items-center flex-wrap gap-x-4 gap-y-2 mb-2 sm:mb-4">
          <span class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#14171f] uppercase leading-none">
            HEY,
          </span>

          <div 
            @click="toggleSelection"
            class="relative inline-flex items-center px-3 sm:px-5 py-1 sm:py-2 cursor-pointer transition-all duration-300"
            :class="isSelected ? 'bg-[#eaedfa] border border-[#8eed06]' : 'bg-transparent border border-transparent'"
            title="Toggle selection box"
            role="button"
            tabindex="0"
            @keydown.enter="toggleSelection"
            @keydown.space.prevent="toggleSelection"
          >
            <span v-if="isSelected" class="absolute -top-1 -left-1 w-2 h-2 bg-[#ea56b5] border border-white"></span>
            <span v-if="isSelected" class="absolute -top-1 -right-1 w-2 h-2 bg-[#ea56b5] border border-white"></span>
            <span v-if="isSelected" class="absolute -bottom-1 -left-1 w-2 h-2 bg-[#ea56b5] border border-white"></span>
            <span v-if="isSelected" class="absolute -bottom-1 -right-1 w-2 h-2 bg-[#ea56b5] border border-white"></span>

            <span class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#14171f] uppercase leading-none font-serif-editorial">
              IT'S
            </span>
          </div>
        </div>

        <div class="hero-headline-item relative mt-1 sm:mt-2">
          <div 
            @click="toggleSelection"
            class="relative inline-block px-3 sm:px-6 py-2 sm:py-3 cursor-pointer transition-all duration-300 max-w-full"
            :class="isSelected ? 'bg-[#eaedfa] border border-[#8eed06]' : 'bg-transparent border border-transparent'"
            title="Toggle selection box"
            role="button"
            tabindex="0"
            @keydown.enter="toggleSelection"
            @keydown.space.prevent="toggleSelection"
          >
            <span v-if="isSelected" class="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-[#ea56b5] border border-white rounded-none"></span>
            <span v-if="isSelected" class="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-[#ea56b5] border border-white rounded-none"></span>
            <span v-if="isSelected" class="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-[#ea56b5] border border-white rounded-none"></span>
            <span v-if="isSelected" class="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-[#ea56b5] border border-white rounded-none"></span>

            <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-editorial font-bold tracking-tight text-[#14171f] uppercase leading-tight">
              mousseP
            </h1>
          </div>

          <div class="mt-2 flex items-center gap-2 pl-3">
            <span class="text-xs font-mono font-medium text-[#ea56b5] tracking-widest uppercase">
              {{ owner.name }} ({{ owner.nickname }})
            </span>
          </div>
        </div>

      </div>

      <div class="hero-card-item lg:col-span-4 flex justify-center lg:justify-end">
        <div class="relative w-64 sm:w-72 md:w-80 group">
          <div class="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full bg-[#eaedfa] rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"></div>

          <div class="w-full bg-white rounded-3xl p-3 border border-slate-200/80 shadow-md overflow-hidden smooth-card">
            <div class="relative aspect-4/5 rounded-2xl overflow-hidden bg-slate-100">
              <img 
                src="/projects/hey_its_me.png"
                alt="Profile photo placeholder" 
                class="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#14171f]/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 text-white">
                <p class="text-xs font-bold leading-tight drop-shadow-sm">
                  {{ owner.name + " (" + owner.handle + ")"}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-14 sm:mt-20 pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

    </div>
  </section>
</template>
