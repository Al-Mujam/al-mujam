<template>
    <div @click="emit('close')" class="fixed flex justify-center items-center inset-0 bg-black/50 z-50 backdrop-blur-sm">
        <div @click.stop class="w-[90vw] h-max max-w-[600px] max-h-[80vh] rounded-2xl flex flex-col bg-background overflow-hidden">
            <div class="flex p-6 py-5 justify-between items-center border-b border-gray-200">
                <h2 class="text-xl text-text-color">
                    {{ translations.find(t => t.key === 'student_testimonial').value[locale] || 'Student Testimonial' }}
                </h2>
                <button class="text-text-color cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300" @click="emit('close')">
                    <IconsClose class="text-2xl" />
                </button>
            </div>
            <div class="flex flex-col gap-4 p-6 max-h-[400px] flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-web-primary scrollbar-track-gray-200">
                <div class="flex items-center gap-4 mb-4">
                    <div class="rounded-full w-[80px] h-[80px] relative">
                        <img v-if="student.image" :src="student.image" class="object-cover rounded-full w-full h-full" alt="">
                        <div v-else class="rounded-full w-[80px] h-[80px] bg-gray-300 flex relative items-center overflow-hidden justify-center">
                            <div class="bg-gray-500 w-[25px] h-[25px] rounded-full"></div>
                            <div class="bg-gray-500 w-[45px] h-[45px] rounded-t-full absolute left-0 mx-auto right-0 -bottom-6"></div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-xl font-bold text-text-color">
                            {{ student.name[locale] }}
                        </div>
                        <div class="text-sm text-text-color/80">
                            {{ student.role[locale] }}
                        </div>
                    </div>
                </div>
                <div class="relative">
                   
                    <div class="text-text-color text-lg font-medium leading-relaxed px-2 ">
                        {{ student.testimony[locale] }}
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IconsComma, IconsClose } from '#components';

const { locale } = useI18n()
const emit = defineEmits(['close'])

defineProps({
    student: {
        type: Object,
        required: true
    }
})

const { data: translations } = await useAsyncData('translations', () => {
    return queryCollection('translations').all()
})
</script>

<style scoped>

</style>
