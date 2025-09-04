<template>
    <div>

        <!-- hero section -->
        <section class="w-full h-[100svh]    text-text-color flex items-center">
            <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px] h-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 h-full">
                    <div class="w-full h-full text-text-color  flex items-end md:items-center pb-20 md:pb-0    justify-start order-2 lg:order-1">
                        <div class="flex flex-col gap-6">

                        <div class="lg:text-5xl text-4xl font-bold text-center lg:text-start ">
                            {{ translations.find(t => t.key === 'hero_title').value[locale] }}
                        </div>
                        <div class="lg:text-xl text-lg font-medium opacity-80 text-center lg:text-start ">
                            {{ translations.find(t => t.key === 'hero_description').value[locale] }}
                        </div>
                         
                        <div class="flex gap-4 justify-center lg:justify-start">
                            <NuxtLink external target="_blank" :to="settings.find(setting => setting.key === 'apply_now_link').value[locale]" class="web-btn">
                                {{ translations.find(t => t.key === 'apply_now').value[locale] }}
                            </NuxtLink>
                            <div @click="scrollToPrograms" class="web-btn-outline">
                                {{ translations.find(t => t.key === 'learn_more').value[locale] }}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="w-full h-full  items-center md:hidden lg:w-full lg:flex justify-center lg:justify-end  flex order-1 lg:order-2  ">
                       <img class=" object-cover w-[250px]   lg:w-full   mt-20 lg:mt-15 " :src="settings.find(setting => setting.key === 'home_hero_image').value[locale]" alt="" >
                    </div>

                </div>
            </div>
        </section>
    

<!-- programs section -->
        <section id="programs-section" class="w-full max-w-[calc(100vw-40px)] mx-auto border border-web-primary/5 py-10 rounded-4xl bg-web-primary/5  relative overflow-hidden     lg:h-[calc(100svh-70px)] h-max   text-text-color flex items-center flex-col  ">
            <img src="/watermarks/ha2-primary.png" :class="isHover ? 'translate-x-0': '-translate-x-full'" class="absolute opacity-10  filter w-[400px]  -start-0 -top-60 transition-all duration-300 " />
            <img src="/watermarks/dal-primary.png" :class="isHover ? 'translate-x-0': 'translate-x-full'" class="absolute opacity-10  filter w-[400px]  -end-0 -bottom-10 transition-all duration-300 " />
                <div  class="w-full h-full items-center justify-center container max-w-[1280px] mx-auto px-4 md:px-20 lg:px-10  grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                    <NuxtLink external target="_blank" :to="program.link" v-for="program in programs.slice(0, 3)" :key="program" @mouseenter="isHover = true" @mouseleave="isHover = false" class="w-full shadow-lg flex items-center justify-center  lg:h-full h-[500px] rounded-4xl relative overflow-hidden group hover:scale-102 transition-all duration-300 cursor-pointer ">
                        <img class="object-cover rounded-4xl absolute inset-0 w-full h-full" :src="program.image" alt="" >
                        <div class="bg-black/20 backdrop-blur-sm w-full flex flex-col gap-2 h-max absolute bottom-0 rounded-b-4xl z-10 p-4 py-6 ">
                        <div class="text-white text-2xl font-bold line-clamp-2 break-words   ">
                            {{ program.title[locale] }}
                        </div>
                        <div class="text-white/80 text-xl  line-clamp-4 break-words   ">
                          {{ program.description[locale] }}
                        </div>
                        
                        </div>
                        <div class="absolute overflow-hidden  bg-web-primary flex items-center justify-center w-full h-full z-20  translate-y-full group-hover:translate-y-0 transition-all duration-500   ">
                            <img src="/watermarks/kaf.png" class="absolute -top-70 -start-70 opacity-20" />
                            <img src="/watermarks/dal.png" class="absolute -bottom-5 -end-5 opacity-20" />
                            <img src="/watermarks/waw.png" class="absolute -end-5 w-[200px] -top-5 opacity-20" />

                            <div class="text-white/90 text-2xl ">
                                {{ translations.find(t => t.key === 'learn_more').value[locale] }}
                            </div>
                        </div>
                    </NuxtLink>
               
                    
                 

                </div>
        </section>

  <!-- exam section -->

    <section class="w-full py-10 relative   lg:h-[calc(100svh-70px)] h-max  gap-10  text-text-color flex items-center overflow-hidden flex-col  ">
           
            <div class="w-full  h-full items-center justify-center container max-w-[1280px] mx-auto px-4 md:px-20 lg:px-10  grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                <div class="flex  flex-col gap-6">
                    

<div class="lg:text-5xl text-4xl font-bold text-center lg:text-start ">
    {{ translations.find(t => t.key === 'exam_title').value[locale] }}
</div>
<div class="lg:text-xl text-lg font-medium opacity-80 text-center lg:text-start ">
    {{ translations.find(t => t.key === 'exam_description').value[locale] }}
</div>
<div class="flex gap-4 justify-center lg:justify-start">
    <NuxtLink external target="_blank" :to="settings.find(setting => setting.key === 'test_now_link').value[locale]" class="web-btn">
        {{ translations.find(t => t.key === 'exam_apply_now').value[locale] }}
    </NuxtLink>
</div>
</div>
                <div class="w-full flex items-center lg:justify-end justify-center  lg:h-full h-[500px]   ">
                   <img :src="settings.find(setting => setting.key === 'home_test_image').value[locale]" class=" h-[80%] " />
                </div>
               
                
             

            </div>
    </section>

    <!-- Stats -->

    <section class="w-full bg-web-primary rounded-4xl max-w-[calc(100vw-40px)] mx-auto h-max overflow-hidden relative ">
        <img src="/watermarks/ha2.png" class="absolute filter md:w-[400px] w-[200px]  opacity-10 -start-0 -top-60 " />
        <img src="/watermarks/kaf.png" class="absolute filter md:w-[400px] w-[200px]  opacity-10 -end-0 -bottom-10 " />
        <div class="container max-w-[1280px] py-10 mx-auto px-4 md:px-20 lg:px-10 h-full  grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div v-for="stat in stats" :key="stat" class=" p-5 flex flex-col gap-3 items-center justify-center h-full">
            <IconsSchool v-if="stat.icon === 'IconsSchool'" class=" text-[4rem] text-background" />
            <IconsStudent v-if="stat.icon === 'IconsStudent'" class=" text-[4rem] text-background" />
            <IconsLesson v-if="stat.icon === 'IconsLesson'" class=" text-[4rem] text-background" />
            <div class="text-3xl font-bold text-background">
                {{ stat.number }}
            </div>
            <div class="text-xl text-center text-background/70">
                {{ stat.description[locale] }}
            </div>
        </div>
       
       
        </div>
    </section>


        <!-- online courses section -->
<section ref="onlineCoursesSection"  class="w-[99vw] mx-auto h-[calc(100dvh-70px)] flex items-center justify-center ">

<div  :class="activeOnlineCourses ? 'text-background bg-web-primary' : 'bg-gray-300 text-gray-600'" class="w-full duration-300 transition-all   rounded-4xl max-w-[calc(100%-40px)] mx-auto h-[calc(100%-30px)]   overflow-hidden relative ">
   
    <img ref="ha2Ref" src="/watermarks/7a2.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -start-0 -top-20 z-0 " />
    <img ref="dalRef" src="/watermarks/dal.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -end-0 -bottom-10 z-0 " />
    <div class="container max-w-[1280px] py-10 mx-auto px-4 md:px-20 lg:px-10 h-full flex flex-col gap-10 items-center justify-center ">
        <div ref="globeRef" class="md:text-5xl text-3xl absolute font-bold text-center text-white w-[80%]">
           {{ translations.find(t => t.key === 'online_main_title').value[locale] }}
        </div>
        <div ref="globeRef2" class="absolute w-full max-w-[1280px] mx-auto px-4 md:px-20 lg:px-10 h-full flex flex-col gap-10 items-center justify-center ">
            <div class="grid md:grid-cols-3 grid-cols-1  gap-10 w-full">
                <!-- Learn From Home -->
                <div class="flex flex-col items-center text-center group  transition-all duration-300">
                    <div class="w-20 h-20 bg-white/10 rounded-full flex text-4xl font-black items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                      1
                    </div>
                    <h3 class="text-xl md:text-3xl font-bold text-white mb-2">{{ translations.find(t => t.key === 'online_feature_1_title').value[locale] }}</h3>
                    <p class="text-white/70 text-sm md:text-lg">{{ translations.find(t => t.key === 'online_feature_1_desc').value[locale] }}</p>
                </div>

                <!-- Interactive Live Classes -->
                <div class="flex flex-col items-center text-center group  transition-all duration-300">
                    <div class="w-20 h-20 bg-white/10 rounded-full flex text-4xl font-black items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                        2
                    </div>
                    <h3 class="text-xl md:text-3xl font-bold text-white mb-2">{{ translations.find(t => t.key === 'online_feature_2_title').value[locale] }}</h3>
                    <p class="text-white/70 text-sm md:text-lg">{{ translations.find(t => t.key === 'online_feature_2_desc').value[locale] }}</p>
                </div>

                <!-- 24/7 Access -->
                <div class="flex flex-col items-center text-center group  transition-all duration-300">
                    <div class="w-20 h-20 bg-white/10 rounded-full  flex items-center text-4xl font-black justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                        3
                    </div>
                    <h3 class="text-xl md:text-3xl font-bold text-white mb-2">{{ translations.find(t => t.key === 'online_feature_3_title').value[locale] }}</h3>
                    <p class="text-white/70 text-sm md:text-lg">{{ translations.find(t => t.key === 'online_feature_3_desc').value[locale] }}</p>
                </div>
            </div>
        </div>
        <div ref="globeRef3" class="absolute  flex flex-col items-center gap-6 justify-center w-full">
            <div class="flex flex-col items-center gap-3 w-full">
            <div class="text-lg font-bold text-white/70 text-center w-[80%] ">
                {{ translations.find(t => t.key === 'online_cta_subtitle').value[locale] }}
            </div>
            <div class="md:text-5xl text-3xl font-bold text-white text-center w-[80%] ">
                {{ translations.find(t => t.key === 'online_cta_title').value[locale] }}
            </div>

            </div>
       

            <div class="web-btn-light">
                <NuxtLink external target="_blank" :to="settings.find(setting => setting.key === 'apply_now_link_online').value[locale]" class="web-btn-dark">
                    {{ translations.find(t => t.key === 'online_cta_button').value[locale] }}
                </NuxtLink>
            </div>
        </div>
    </div>
</div>
</section>


    <!-- students section -->
    

    <section class="w-full py-20 relative   lg:h-[calc(100svh-70px)] h-max  gap-10  text-text-color justify-center flex items-center overflow-hidden flex-col  ">
        <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full ">
            <div class="text-lg md:text-xl font-bold text-center text-web-primary ">
                {{ translations.find(t => t.key === 'students_title').value[locale].toUpperCase() }}
            </div>
            <div class="text-4xl md:text-5xl font-bold text-center text-text-color ">
                {{ translations.find(t => t.key === 'students_description').value[locale] }}
            </div>
        </div>
          
            <div class="w-full px-10 py-5  h-full overflow-x-auto  snap-x snap-mandatory gap-10     flex flex-nowrap scrollbar-thin scrollbar-thumb-web-primary scrollbar-track-gray-200  ">
            
               <div v-for="student in students" :key="student" class="w-[90vw] max-w-[600px] overflow-hidden    h-full shrink-0 bg-white shadow-web rounded-4xl  snap-center   flex flex-col ">
               <div class="flex-1 p-5 flex flex-col">
               <div class="text-web-primary h-max text-4xl"> 
                <IconsComma />
               </div>
               <div class="flex-1 px-5 flex items-center justify-center">
                <div class="text-text-color text-lg font-medium line-clamp-4">
                  {{ student.testimony[locale] }}
                   </div>
               </div>
               <div class="text-web-primary flex items-end justify-end h-max text-4xl"> 
                <IconsComma class="rotate-180" />
               </div>
               </div>
               <div class=" p-5 h-max border-t border-web-primary/10 flex items-center justify-between ">
                <div class="flex   items-center gap-3">

               <div class="rounded-full w-[60px] h-[60px] relative ">
                <img v-if="student.image" :src="student.image" class="object-cover rounded-full w-full h-full" alt="">
                <div v-else class="rounded-full w-[60px] h-[60px] bg-gray-300 flex relative items-center overflow-hidden justify-center">
                    <div class="bg-gray-500 w-[20px] h-[20px] rounded-full ">
                    </div>
                    <div class="bg-gray-500 w-[40px] h-[40px] rounded-t-full absolute left-0 mx-auto right-0 -bottom-6">

                    </div>
                </div>
               </div>
               <div class="flex flex-col items-start justify-center">
                <div class="text-lg font-bold text-text-color  ">
                    {{ student.name[locale] }}
                </div>
                <div class="text-sm text-text-color/80  ">
                    {{ student.role[locale] }}
                </div>
                </div>

               </div>
               
        
               </div>
               </div>
                
             

            </div>
    </section>





    </div>
</template>

<script setup>
import { IconsLesson, IconsSchool, IconsStudent, IconsComma } from '#components';

const activeOnlineCourses = ref(false)

const {width, height} = useWindowSize()
const { locale, locales, setLocale, t } = useI18n()

definePageMeta({
    name: 'home'
})


const globeRef = ref(null)
const ha2Ref = ref(null)
const dalRef = ref(null)
const globeRef2 = ref(null)
const globeRef3 = ref(null)



onMounted(() => {
    const tl = useGSAP().timeline({
    scrollTrigger: {
      trigger: onlineCoursesSection.value,
      start: "top-=70 top",       // element top hits viewport top
      end: "bottom+=5000 bottom",          // stay pinned for 2000px scroll
      pin: true,              // pin the section
      scrub: true,            // link animation to scroll
      invalidateOnRefresh: true,
          // debug markers (remove later)
    }
  });

  tl.from(ha2Ref.value, {
    transform: 'translateX(-600px)',
    ease: "power2.inOut",
    duration: 0.3
  })
  tl.from(dalRef.value, {
    transform: 'translateX(700px)',
    ease: "power2.inOut",
    duration: 0.3
  }, '<')

  tl.from(globeRef.value, {
    transform: 'translateY(-700px)',
    ease: "power2.inOut"
  })

  tl.to(globeRef.value, {
    transform: 'translateY(700px)',
    ease: "power2.inOut"
  })
  tl.from(globeRef2.value, {
    transform: 'translateY(-700px)',
    ease: "power2.inOut"
  })

  tl.to(globeRef2.value, {
    transform: 'translateY(700px)',
    ease: "power2.inOut"
  })

  tl.from(globeRef3.value, {
    transform: 'translateY(-700px)',
    ease: "power2.inOut"
  })
  


  

  onBeforeUnmount(() => {
    tl.kill()
})  
  

    watch(width, (newVal) => {
        tl.scrollTrigger.refresh()
    })
}) 






const isHover = ref(false)

const { data: programs } = await useAsyncData('programs', () => {
  return queryCollection('programs').all()
})

const { data: students } = await useAsyncData('students', () => {
  return queryCollection('students').all()
})

const { data: settings } = await useAsyncData('settings', () => {
  return queryCollection('general').all()
})

const { data: stats } = await useAsyncData('stats', () => {
  return queryCollection('stats').all()
})

const { data: translations } = await useAsyncData('translations', () => {
  return queryCollection('translations').all()
})


const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section')
    const yOffset = -70; // offset in px (negative moves up, positive moves down)
const y = programsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({ top: y, behavior: 'smooth' });
 
}

const onlineCoursesSection = ref(null)

const {top, bottom} = useElementBounding(onlineCoursesSection)

watch(top, (newVal) => {
    if(newVal < 100){
        activeOnlineCourses.value = true
    }else{
        activeOnlineCourses.value = false
    }
})


useSeoMeta({
    title:  () => `${translations.value.find(t => t.key === 'home').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    description: () => settings.value.find(setting => setting.key === 'home_page_seo_desc').value[locale.value],
    ogTitle: () => `${translations.value.find(t => t.key === 'home').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    ogDescription: () => settings.value.find(setting => setting.key === 'home_page_seo_desc').value[locale.value],
    ogImage: '/brand/seo_image.png',
    twitterTitle: () => `${translations.value.find(t => t.key === 'home').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
})



</script>

<style  scoped>

</style>