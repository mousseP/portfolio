<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '@/data/projects'
import type { ProjectItem } from '@/data/types'
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from '@lucide/vue'

interface CarouselImage {
  src: string
  alt: string
  caption: string
}

const project1 = (projects.find(p => p.ordinal === 'First') || projects[0]) as ProjectItem
const project2 = (projects.find(p => p.ordinal === 'Second') || projects[1] || projects[0]) as ProjectItem
const project3 = (projects.find(p => p.ordinal === 'Third') || projects[2] || projects[0]) as ProjectItem

function buildSlides(project: ProjectItem, captions: string[]): CarouselImage[] {
  const allUrls = [project.image, ...(project.secondaryImages || [])]
  return allUrls.map((src, idx) => ({
    src,
    alt: captions[idx] || `${project.title} ${idx + 1}`,
    caption: captions[idx] || `${project.title} ${idx + 1}`
  }))
}

const carouselProjects = [
  {
    project: project2,
    slides: buildSlides(project2, [
      'Primary Artwork & Layout',
      'Concept & Composition',
      'Visual Identity Details'
    ])
  },
  {
    project: project3,
    slides: buildSlides(project3, [
      'Interface & Visual Layout',
      'Wireframe & Typography',
      'Final Mockup Preview'
    ])
  }
]

const currentIndexes = ref<number[]>(carouselProjects.map(() => 0))

function getVisibleSlides(slides: CarouselImage[], currentIndex: number): CarouselImage[] {
  return [0, 1, 2].map(offset => slides[(currentIndex + offset) % slides.length]!)
}

function nextSlide(carouselIdx: number, total: number) {
  const current = currentIndexes.value[carouselIdx] ?? 0
  currentIndexes.value[carouselIdx] = (current + 1) % total
}

function prevSlide(carouselIdx: number, total: number) {
  const current = currentIndexes.value[carouselIdx] ?? 0
  currentIndexes.value[carouselIdx] = (current - 1 + total) % total
}

function goToSlide(carouselIdx: number, slideIdx: number) {
  currentIndexes.value[carouselIdx] = slideIdx
}
</script>

<template>
  <section id="works" class="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-24">
    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
      <div>
        <span class="text-xs font-mono uppercase tracking-widest text-[#ea56b5] font-semibold block mb-1">
          CREATIVE WORKS & DESIGN
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 uppercase">
          PROJECT GALLERY
        </h2>
      </div>
      <span class="text-xs font-mono text-slate-500 hidden sm:inline">
        Illustrations, Graphics & Visual Design
      </span>
    </div>

    <div class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs hover:border-[#b8c4ea] hover:shadow-md transition-all duration-500 smooth-card">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-5 space-y-4">
          <div class="space-y-1">
            <span class="font-script-accent text-3xl sm:text-4xl text-[#ea56b5] font-bold block leading-none">
              {{ project1.ordinal }}
            </span>
            <h3 class="text-4xl sm:text-5xl font-black tracking-tight text-[#14171f] uppercase leading-none font-sans">
              PROJECT
            </h3>
          </div>

          <h4 class="text-lg sm:text-xl font-serif-editorial font-bold text-slate-900">
            {{ project1.title }}
          </h4>
        </div>

        <div class="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
          <div class="col-span-2 group relative aspect-16/9 rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-md">
            <img
              :src="project1.image"
              :alt="project1.title"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>

          <div class="group relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-md">
            <img
              :src="project1.secondaryImages?.[0] || '/placeholders/project-thumb.svg'"
              alt="Concept & Sketching"
              class="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>

          <div class="group relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-md">
            <img
              :src="project1.secondaryImages?.[1] || '/placeholders/project-thumb.svg'"
              alt="Color & Rendering"
              class="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      v-for="(item, cIdx) in carouselProjects"
      :key="item.project.id"
      class="rounded-3xl border border-[#9aa9d4] bg-[#f5f7fd] p-5 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden smooth-card"
    >
      <div class="relative mb-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="(img, sIdx) in getVisibleSlides(item.slides, currentIndexes[cIdx] ?? 0)"
            :key="`${currentIndexes[cIdx]}-${sIdx}`"
            class="group relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-md"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>

        <button
          type="button"
          @click="prevSlide(cIdx, item.slides.length)"
          class="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#ea56b5] border border-slate-200 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#ea56b5]"
          aria-label="Previous picture"
        >
          <ChevronLeft class="w-5 h-5" />
        </button>

        <button
          type="button"
          @click="nextSlide(cIdx, item.slides.length)"
          class="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#ea56b5] border border-slate-200 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#ea56b5]"
          aria-label="Next picture"
        >
          <ChevronRight class="w-5 h-5" />
        </button>
      </div>

      <div class="flex items-center justify-center gap-2.5 mb-8">
        <button
          v-for="(_, dotIdx) in item.slides"
          :key="dotIdx"
          type="button"
          @click="goToSlide(cIdx, dotIdx)"
          class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ea56b5]"
          :class="currentIndexes[cIdx] === dotIdx ? 'bg-[#ea56b5] scale-125' : 'bg-[#b8c4ea] hover:bg-[#9aa9d4]'"
          :aria-label="`Go to picture ${dotIdx + 1}`"
          :aria-current="currentIndexes[cIdx] === dotIdx ? 'true' : undefined"
        ></button>
      </div>

      <div class="pt-4 border-t border-[#b8c4ea]/70 flex justify-center">
        <div class="lg:col-span-5 space-y-1">
          <span class="font-script-accent text-3xl sm:text-4xl text-[#ea56b5] font-bold block leading-none">
            {{ item.project.ordinal }}
          </span>
          <h3 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#14171f] uppercase leading-none font-sans">
            PROJECT
          </h3>
          <h4 class="text-base sm:text-lg font-serif-editorial font-bold text-slate-800 pt-2">
            {{ item.project.title }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>
