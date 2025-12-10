<template>
    <Html :lang="locale" :dir="locales.find(l => l.code === locale)?.dir" class="font-[Lato] scrollbar-thin scrollbar-thumb-text-color scrollbar-track-gray-200 bg-background selection:bg-web-primary selection:text-white">
        <Head>
            <!-- Font Preconnects -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet">
        </Head>

        <Body>
            <!-- Google Tag Manager (noscript) -->
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6SJ8XHZ"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
            </noscript>

            <!-- Loading Transition -->
            <Transition @leave="leave">
                <Loading v-if="loading"/>
            </Transition>

            <!-- Navigation -->
            <NavBarComponent/>

            <!-- Main Content -->
            <NuxtPage />

            <!-- Footer -->
            <FooterComponent/>
        </Body>
    </Html>
</template>

<script setup>
// Google Analytics and Tag Manager setup
useHead({
    script: [
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-ERSMPQTMQ6',
            async: true
        },
        {
            innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-ERSMPQTMQ6');
            `
        },
        {
            innerHTML: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M6SJ8XHZ');
            `
        }
    ]
})

const { locale, locales, setLocale} = useI18n()

const loading = ref(true)

const leave = (el,done) => {
    useGSAP().to(el,{
        opacity: 0,
        duration: 0.5,
        onComplete: done
    })
}

onMounted(async () => {
    await nextTick()
    loading.value = false
})
</script>

<style scoped>

</style>