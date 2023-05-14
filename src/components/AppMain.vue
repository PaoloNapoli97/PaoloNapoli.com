<template>
    <main>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active{
        transition: opacity 0,3s;
    }

    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>