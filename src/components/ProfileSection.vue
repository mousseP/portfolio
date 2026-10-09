<script setup lang="ts">
import { owner } from '@/data/owner'
import { GraduationCap, Briefcase } from '@lucide/vue'
</script>

<template>
  <section id="about" class="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-slate-200">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-[#5c6e9e] text-white flex items-center justify-center font-serif-editorial font-bold text-lg shadow-sm transition-transform duration-300 hover:scale-105">
          KT
        </div>
        <div>
          <span class="text-xs font-mono tracking-widest text-slate-500 uppercase block">IDENTITY</span>
          <span class="text-sm font-bold text-slate-900">{{ owner.handle }}</span>
        </div>
      </div>
    </div>

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

        <div class="relative rounded-3xl p-3 bg-[#eaedfa] border border-[#b8c4ea] shadow-sm overflow-hidden group smooth-card">
          <div class="aspect-3/4 rounded-2xl overflow-hidden bg-slate-200">
            <img 
              src="/projects/portrait.png"
              alt="Portrait photo placeholder" 
              class="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out" 
              loading="lazy" 
            />
          </div>
          <div class="p-3 bg-white/95 rounded-xl mt-3 border border-slate-200/80 text-xs transition-colors duration-300 group-hover:border-[#5c6e9e]">
            <div class="flex items-center justify-between text-slate-500 font-mono text-[11px] mb-1">
              <span>AFFILIATION</span>
              <span>{{ owner.location }}</span>
            </div>
            <p class="font-bold text-slate-900 text-xs">
              {{ owner.affiliation }}
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-8 space-y-10">
        <div class="space-y-3">
          <h3 class="text-sm font-mono tracking-widest uppercase font-bold text-slate-900 flex items-center gap-2">
            ABOUT ME
          </h3>
          <p class="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
            {{ owner.fullBio }}
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-mono tracking-widest uppercase font-bold text-slate-900 flex items-center gap-2">
              SOFTWARE & TECHNICAL SKILLS
            </h3>
            <span class="text-xs font-mono text-slate-500">{{ owner.skills.length }} Primary Tools</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <div 
              v-for="skill in owner.skills" 
              :key="skill.name"
              class="p-3 rounded-2xl border border-slate-200 bg-white hover:border-[#5c6e9e] hover:shadow-md transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-200">
          <div class="space-y-4">
            <h3 class="text-sm font-mono tracking-widest uppercase font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap class="w-4 h-4 text-[#5c6e9e]" />
              EDUCATION
            </h3>
            <div 
              v-for="edu in owner.education" 
              :key="edu.degree"
              class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 transition-all duration-300 hover:shadow-xs hover:border-[#b8c4ea]"
            >
              <div class="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{{ edu.period }}</span>
              </div>
              <h4 class="font-bold text-slate-900 text-sm">
                {{ edu.institution }}
              </h4>
              <p class="text-xs font-medium text-[#5c6e9e]">
                {{ edu.degree }} ({{ edu.field }})
              </p>
              <p v-if="edu.highlights" class="text-xs text-slate-600 leading-relaxed pt-1">
                {{ edu.highlights }}
              </p>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-sm font-mono tracking-widest uppercase font-bold text-slate-900 flex items-center gap-2">
              <Briefcase class="w-4 h-4 text-[#5c6e9e]" />
              EXPERIENCE
            </h3>
            <div 
              v-for="exp in owner.experience" 
              :key="exp.role"
              class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 transition-all duration-300 hover:shadow-xs hover:border-[#b8c4ea]"
            >
              <div class="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{{ exp.period }}</span>
                <span class="font-bold text-slate-700">{{ exp.organization }}</span>
              </div>
              <h4 class="font-bold text-slate-900 text-sm">
                {{ exp.role }}
              </h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                {{ exp.description }}
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="skill in exp.skills" 
                  :key="skill"
                  class="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-600 transition-colors duration-200 hover:border-[#5c6e9e]"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
