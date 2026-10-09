<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from '@lucide/vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import { owner } from '@/data/owner'

const isMobileMenuOpen = ref(false)

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header class="w-full relative z-40 transition-all duration-300">
    <div class="w-full h-9 sm:h-11 bg-[#ea56b5] flex items-center justify-between px-4 sm:px-8 text-white/90 text-xs font-mono tracking-wider border-b border-[#4f5f8a]">
      <div class="flex items-center space-x-2">
        <span class="font-medium text-white/95">KIT</span>
      </div>
      <div class="flex items-center space-x-4">
        <a 
          v-if="owner.socialLinks[0]"
          :href="owner.socialLinks[0].url" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-white transition-all duration-300 flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-white rounded px-1.5 py-0.5 hover:bg-white/10"
          aria-label="GitHub Profile"
        >
          <GithubIcon class="w-3.5 h-3.5" />
          <span class="hidden md:inline">{{ owner.handle }}</span>
        </a>
        <a 
          v-if="owner.socialLinks[1]"
          :href="owner.socialLinks[1].url" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-white transition-all duration-300 flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-white rounded px-1.5 py-0.5 hover:bg-white/10"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon class="w-3.5 h-3.5" />
          <span class="hidden md:inline">LinkedIn</span>
        </a>
      </div>
    </div>

    <nav class="max-w-7xl mx-auto px-4 sm:px-8 pt-5 pb-3 flex items-center justify-between" aria-label="Main Navigation">

      <div class="md:hidden flex items-center">
        <button
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2.5 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-100 min-w-11 min-h-11 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#5c6e9e] transition-all duration-300"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-5 h-5 transition-transform duration-300" />
          <X v-else class="w-5 h-5 transition-transform duration-300 rotate-90" />
        </button>
      </div>
    </nav>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xl px-6 py-6 space-y-4 z-50"
      >

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>{{ owner.name }}</span>
          <span>{{ owner.handle }}</span>
        </div>
      </div>
    </transition>
  </header>
</template>
