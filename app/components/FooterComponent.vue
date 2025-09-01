<template>
    <footer class="bg-web-primary text-white relative overflow-hidden">
        <!-- Background Watermarks -->
        <img src="/watermarks/waw.png" class="absolute filter w-[300px] opacity-10 -start-20 -top-10 z-0" />
        <img src="/watermarks/seen.png" class="absolute filter w-[300px] opacity-10 -end-20 -bottom-10 z-0" />
        
        <div class="relative z-10">
            <!-- Main Footer Content -->
            <div class="container max-w-[1280px] mx-auto px-4 md:px-20 lg:px-10 py-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <!-- Brand Section -->
                    <div class="lg:col-span-1">
                        <div class="flex items-center gap-5 mb-6">
                            <img :src="settings.find(setting => setting.key === 'app_logo').value[locale]" alt="Almujam Center Logo" class="h-12 invert filter brightness-0">
                            <div>
                                <h3 class="text-xl font-bold">{{ settings.find(setting => setting.key === 'app_name').value[locale] }}</h3>
                                <p class="text-white/70 text-sm">{{ settings.find(setting => setting.key === 'app_slogan').value[locale] }}</p>
                            </div>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed mb-6">
                            {{ settings.find(setting => setting.key === 'app_desc').value[locale] }}
                        </p>
                        <!-- Social Media Links -->
                        <div class="flex items-center gap-4">
                            <NuxtLink v-if="settings.find(setting => setting.key === 'facebook_link').value[locale] != 'none'" external target="_blank" :to="settings.find(setting => setting.key === 'facebook_link').value[locale]" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                                <IconsFacebook class="text-2xl" />
                            </NuxtLink>
                            <NuxtLink v-if="settings.find(setting => setting.key === 'linkedin_link').value[locale] != 'none'" external target="_blank" :to="settings.find(setting => setting.key === 'linkedin_link').value[locale]" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                                <IconsLinkedin class="text-lg" />
                            </NuxtLink>
                            <NuxtLink v-if="settings.find(setting => setting.key === 'instagram_link').value[locale] != 'none'" external target="_blank" :to="settings.find(setting => setting.key === 'instagram_link').value[locale]" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                                <IconsInstagram class="text-lg" />
                            </NuxtLink>
                            <NuxtLink v-if="settings.find(setting => setting.key === 'twitter_link').value[locale] != 'none'" external target="_blank" :to="settings.find(setting => setting.key === 'twitter_link').value[locale]" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                                <IconsTwitter class="text-lg" />
                            </NuxtLink>
                            <NuxtLink v-if="settings.find(setting => setting.key === 'whatsapp_link').value[locale] != 'none'" external target="_blank" :to="settings.find(setting => setting.key === 'whatsapp_link').value[locale]" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                                <IconsWhatsapp class="text-lg" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-lg font-semibold mb-6">{{ translations.find(t => t.key === 'footer_quick_links').value[locale] }}</h4>
                        <ul class="space-y-3">
                            <li>
                                <NuxtLink :to="{name: 'home'}" class="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                                    {{ translations.find(t => t.key === 'home').value[locale] }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="{name: 'about'}" class="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                                    {{ translations.find(t => t.key === 'why_almuajam').value[locale] }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="{name: 'academic-admissions'}" class="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                                    {{ translations.find(t => t.key === 'academics_admissions').value[locale] }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="{name: 'student-life'}" class="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                                    {{ translations.find(t => t.key === 'student_life').value[locale] }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="{name: 'blog-resources'}" class="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                                    {{ translations.find(t => t.key === 'blog_resources').value[locale] }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    

                    <!-- Contact & Info -->
                    <div>
                        <h4 class="text-lg font-semibold mb-6">{{ translations.find(t => t.key === 'footer_contact_info').value[locale] }}</h4>
                        <div class="space-y-4">
                            <div class="flex items-start opacity-80 hover:opacity-100 transition-all duration-300 gap-3">
                                <svg class="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <NuxtLink v-if="contact.find(contact => contact.key === 'address').link != 'none'" external target="_blank" :to="contact.find(contact => contact.key === 'address').link[locale]" class="text-white text-sm">
                                    {{ contact.find(contact => contact.key === 'address').value[locale] }}
                                </NuxtLink>
                            </div>
                            <div class="flex items-center opacity-80 hover:opacity-100 transition-all duration-300 gap-3">
                                <svg class="w-5 h-5  flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <NuxtLink v-if="contact.find(contact => contact.key === 'phone').link != 'none'" external target="_blank" :to="`tel:${contact.find(contact => contact.key === 'phone').link[locale]}`" class=" text-sm">
                                    {{ contact.find(contact => contact.key === 'phone').value[locale] }}
                                </NuxtLink>
                            </div>
                            <div class="flex items-center opacity-80 hover:opacity-100 transition-all duration-300 gap-3">
                                <svg class="w-5 h-5  flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <NuxtLink v-if="contact.find(contact => contact.key === 'email').link != 'none'" external target="_blank" :to="`mailto:${contact.find(contact => contact.key === 'email').link[locale]}`" class=" text-sm">
                                    {{ contact.find(contact => contact.key === 'email').value[locale] }}
                                </NuxtLink>
                            </div>
                        </div>

                        <!-- CTA Button -->
                        <div class="mt-6">
                            <NuxtLink external target="_blank" :to="settings.find(setting => setting.key === 'apply_now_link').value[locale]" class="inline-block bg-white text-text-color px-5 py-2.5 rounded-full  hover:bg-white/90 transition-all duration-300 text-sm">
                                {{ translations.find(t => t.key === 'apply_now').value[locale] }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Footer -->
            <div class="border-t border-white/10">
                <div class="container max-w-[1280px] mx-auto px-4 md:px-20 lg:px-10 py-6">
                    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div class="flex items-center gap-6 text-sm text-white/70">
                            <p>&copy; {{ new Date().getFullYear() }} {{ settings.find(setting => setting.key === 'app_copyright').value[locale] }}</p>
                        </div>
                        
                        <div class="flex items-center gap-6 text-sm">
                            <NuxtLink :to="{name: 'privacy'}" class="text-white/70 hover:text-white transition-colors duration-300">
                                {{ translations.find(t => t.key === 'footer_privacy_policy').value[locale] }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const {locale} = useI18n()

const { data: settings } = await useAsyncData('settings', () => {
  return queryCollection('general').all()
})

const { data: contact } = await useAsyncData('contact', () => {
  return queryCollection('contact').all()
})

const { data: translations } = await useAsyncData('translations', () => {
  return queryCollection('translations').all()
})
</script>

<style scoped>

</style>