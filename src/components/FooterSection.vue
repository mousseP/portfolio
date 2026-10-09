<script setup lang="ts">
import { ref } from 'vue'
import { owner } from '@/data/owner'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { ArrowUp, Mail, Check, Copy } from '@lucide/vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'

const { scrollTo } = useSmoothScroll()

const copied = ref(false)

function copyEmail() {
  navigator.clipboard.writeText('mariekeith.tabil@gmail.com ').then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  })
}
</script>

<template>
  <footer id="contact" class="bg-[#1d1d2a] text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-8 mt-16 sm:mt-24 border-t border-slate-800">
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-slate-800">
        <div class="lg:col-span-7 space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-[#9aa9d4] font-semibold block">
            GET IN TOUCH
          </span>
          <h2 class="text-3xl sm:text-5xl font-serif-editorial font-bold text-white tracking-tight">
            Want to commission me?
          </h2>
          <p class="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
            Contact me for more details!!! commission me plzzzzz
          </p>
          <p class="text-xs sm:text-sm text-white leading-relaxed font-sans max-w-sm">
            {{ owner.shortBio }}
          </p>
          <span>{{ owner.location }}</span>
        </div>

        <div class="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-start lg:justify-end">
          <button
            type="button"
            @click="copyEmail"
            class="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white text-xs font-mono transition-all duration-300 flex items-center justify-center gap-2 border border-slate-700 focus-visible:ring-2 focus-visible:ring-[#5c6e9e] cursor-pointer hover:-translate-y-0.5"
            aria-label="Copy email address to clipboard"
          >
            <Check v-if="copied" class="w-4 h-4 text-emerald-400 transition-transform duration-300 scale-110" />
            <Copy v-else class="w-4 h-4 text-slate-400 transition-transform duration-300" />
            <span>{{ copied ? 'Email Copied!' : 'mariekeith.tabil@gmail.com' }}</span>
          </button>


          <a
              href="mailto:mariekeith.tabil@gmail.com"
              class="inline-flex items-center justify-center gap-2
         px-6 py-3 rounded-xl
         bg-[#ea56b5] hover:bg-[#d63d9f]
         text-white text-xs font-bold
         whitespace-nowrap shrink-0
         transition-all duration-300 shadow-md
         focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail class="w-4 h-4 shrink-0" />
            <span class="whitespace-nowrap">Send Email</span>
          </a>

          <div class="md:col-span-4 flex items-center justify-start md:justify-end space-x-4">
            <a
                v-if="owner.socialLinks[0]"
                :href="owner.socialLinks[0].url"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white transition-all duration-300 text-slate-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#5c6e9e]"
                aria-label="Visit GitHub Profile"
            >
              <GithubIcon class="w-4 h-4" />
            </a>
            <a
                v-if="owner.socialLinks[1]"
                :href="owner.socialLinks[1].url"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white transition-all duration-300 text-slate-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#5c6e9e]"
                aria-label="Visit LinkedIn Profile"
            >
              <LinkedinIcon class="w-4 h-4" />
            </a>
            <button
                type="button"
                @click="scrollTo('#hero', { offset: -60 })"
                class="p-2.5 rounded-lg bg-slate-800 hover:bg-[#5c6e9e] text-slate-300 hover:text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Scroll back to top"
            >
              <ArrowUp class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
