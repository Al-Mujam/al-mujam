<template>
    <div @click="emit('close')" class="fixed flex justify-center items-center inset-0 bg-black/50 z-50 backdrop-blur-sm">
        <div @click.stop class=" w-[90vw] h-max max-w-[500px] rounded-2xl flex flex-col bg-background overflow-hidden">
            <div class="flex p-6 py-5 justify-between items-center  border-b border-gray-200 ">
                <h2 class="text-xl  text-text-color">
                    {{ translations.find(t => t.key === 'select_language').value[locale] }}
                </h2>
                <button class="text-text-color cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300" @click="emit('close')">
                    <IconsClose class="text-2xl" />
                </button>


            </div>
            <div class="flex flex-col  gap-4 p-6 max-h-[400px]  flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-web-primary scrollbar-track-gray-200">
                <div @click="setLocale(l.code)" class="flex  items-center justify-between gap-4 border border-gray-200 p-4 rounded-lg cursor-pointer" :class="{'border-web-primary border-2': l.code == locale}"  v-for="l in locales" :key="l.code">
                    <div class="flex items-center gap-4">
                    <img :src="l.flag" alt="flag" class="w-10 h-10 object-cover object-left rounded-full">
                    <h2 class="  text-text-color">
                        {{ l.language }} 
                    </h2>
                    </div>
                    <div v-if="l.code == locale" class="text-white bg-web-primary  rounded-full p-0.5   hover:opacity-100 transition-all duration-300" >
                        <IconsCheck class="text-xl"  />
                    </div>
                    <div v-else class="text-background border border-gray-300  rounded-full p-0.5   hover:opacity-100 transition-all duration-300" >
                        <IconsCheck class="text-xl"  />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { IconsCheck, IconsClose } from '#components';

const {locales, locale, setLocale} = useI18n()
const emit = defineEmits(['close'])

const { data: translations } = await useAsyncData('translations', () => {
  return queryCollection('translations').all()
})

</script>

<style scoped>

</style>