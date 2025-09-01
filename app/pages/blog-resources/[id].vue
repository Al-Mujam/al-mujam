<template>
    <div class="mt-[70px] w-full">
        <div class="container py-5 flex flex-col   mx-auto px-4 md:px-20 lg:px-10 max-w-[800px]">
            <img :src="blogData?.image" alt="blog image" class="w-full h-[300px] object-cover rounded-t-4xl rounded-b-lg">
            <div class="flex flex-col mt-5 ">
            <h2 class="text-md font-medium text-text-color/70">
                {{ blogData?.subtitle[locale] }}
            </h2>
            <h1 class="text-3xl font-bold text-text-color">
                {{ blogData?.title[locale] }}
            </h1>
            </div>
            <hr class="my-4 border-gray-200"> 
            <div class="flex flex-col gap-5">

            <div v-for="s in blogData?.sections" :key="s">
                <h3 class="text-lg font-bold text-text-color">
                    {{ s.heading[locale] }}
                </h3>
                <div>
                    <div class="text-text-color/90" v-for="c in s.content[locale]" :key="c">
                        {{ c }}
                    </div>
                </div>
            </div>
            <hr class="my-0 border-gray-200"> 
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    name: 'blog'
})
const {data: blog} = await useAsyncData('blogs', () => {
    return queryCollection('blogs').all()
})

const {locale} = useI18n()




const blogData = computed(() => {
    return blog?.value?.find(b => b.blog_id == useRoute().params.id)
})


</script>

<style  scoped>

</style>