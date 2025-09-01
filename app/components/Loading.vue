<template>
    <div class="fixed inset-0 bg-background/60 backdrop-blur-lg flex justify-center items-center z-[9999]">
        <span class="loader"></span>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid var(--color-background);
    border-bottom-color: var(--color-web-primary);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

</style>