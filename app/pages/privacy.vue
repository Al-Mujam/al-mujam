<template>
<div class="container max-w-[1280px] py-10 pt-[100px] mx-auto px-4 md:px-20 lg:px-10 h-full flex flex-col gap-10 items-center justify-center ">
    <ContentRenderer :value=" locale === 'tr' ? privacy_tr : privacy" />
</div>
</template>

<script setup>

const { data: privacy } = await useAsyncData('privacy', () => {
    return queryCollection('privacy').path('/privacy/privacy').first()
})
const { data: privacy_tr } = await useAsyncData('privacy_tr', () => {
    return queryCollection('privacy').path('/privacy/privacy_tr').first()
})

const { data: settings } = await useAsyncData('settings', () => {
    return queryCollection('general').all()
})

const { data: translations } = await useAsyncData('translations', () => {
    return queryCollection('translations').all()
})

const { locale, locales, setLocale, t } = useI18n()

definePageMeta({
    
    name: 'privacy'
})

useSeoMeta({
title: () => `${translations.value.find(t => t.key === 'privacy').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
description: () => settings.value.find(setting => setting.key === 'app_desc').value[locale.value],
ogTitle: () => `${translations.value.find(t => t.key === 'privacy').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
ogDescription: () => settings.value.find(setting => setting.key === 'app_desc').value[locale.value],
ogImage: '/brand/logo.png',
twitterTitle: () => `${translations.value.find(t => t.key === 'privacy').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
})
</script>

<style  scoped>

</style>