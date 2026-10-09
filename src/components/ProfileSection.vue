<script setup lang="ts">
import { owner } from '@/data/owner'
import { GraduationCap, Briefcase } from '@lucide/vue'
</script>

<template>
  <section id="about" class="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <div class="lg:col-span-4 flex flex-col space-y-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-[#ea56b5] font-semibold block mb-1">
            HELLO, I AM
          </span>
          <h2 class="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 uppercase tracking-tight">
            {{ owner.name }}
          </h2>
          <p class="text-xs font-mono text-slate-500 mt-1">
            {{ owner.title }}
          </p>
        </div>

        <div class="relative p-3 bg-[#eaedfa]">
          <div class="aspect-3/4 overflow-hidden bg-slate-200">
            <img 
              src="/projects/portrait.png"
              alt="Portrait photo placeholder" 
              class="w-full h-full object-cover object-center"
              loading="lazy" 
            />
          </div>
        </div>
      </div>

      <div class="lg:col-span-8 space-y-10">

        <!-- ABOUT ME -->
        <div class="space-y-3">
          <h3 class="text-sm font-mono tracking-widest uppercase font-bold text-slate-900 flex items-center gap-2">
            ABOUT ME
          </h3>

          <p class="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
            {{ owner.fullBio }}
          </p>
        </div>

        <!-- GET TO KNOW ME MORE -->
        <div class="space-y-4">
          <h3 class="text-sm font-mono tracking-widest uppercase font-bold text-slate-900">
            GET TO KNOW ME MORE
          </h3>
          <a
              href="/projects/Resume - Tabil, Arlene Marie Keith U.pdf"
              download="Resume - Tabil, Arlene Marie Keith U.pdf"
              class="inline-flex items-center justify-center gap-3
             px-6 py-3 rounded-xl
             bg-[#ea56b5] text-white
             text-sm font-mono font-bold tracking-wide
             shadow-sm
             hover:bg-[#d63d9f]
             hover:shadow-lg
             transition-all duration-300 ease-in-out"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>

            DOWNLOAD MY CV
          </a>
        </div>

        <!-- SOFTWARE & TECHNICAL SKILLS -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-mono tracking-widest uppercase font-bold text-slate-900 flex items-center gap-2">
              SOFTWARE & TECHNICAL SKILLS
            </h3>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <div
                v-for="skill in owner.skills"
                :key="skill.name"
                class="group p-3 rounded-2xl border border-slate-200 bg-white"
            >
              <div class="flex items-center space-x-3 mb-2">
                <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <img
                      :src="skill.icon"
                      :alt="skill.name"
                      class="w-full h-full object-cover"
                      loading="lazy"
                  />
                </div>

                <div>
                  <h4 class="text-xs font-bold text-slate-900 group-hover:text-[#5c6e9e] transition-colors duration-200 leading-tight">
                    {{ skill.name }}
                  </h4>

                  <span class="text-[10px] font-mono text-slate-600 uppercase">
              {{ skill.category }}
            </span>
                </div>
              </div>

              <p class="text-[11px] text-slate-600 leading-snug line-clamp-2">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
