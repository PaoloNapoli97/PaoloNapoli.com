<template>
    <div class="container">
        <div class="hero d-flex align-items-center justify-content-center flex-column">
            <!-- <img src="../assets/img/heroImage.png" alt=""> -->
            <h1>
                <span class="symbol"> &#60;</span>
                  Paolo Napoli
                  <span class="symbol">/&#62;</span> 
            </h1>

            <div>
                <VueWriter class="fs-2 writer" :array="['Web Developer', 'Full Stack Web Developer', 'Front-End Developer', 'Back-End Developer', 'Software Developer', 'Vue Developer', 'Laravel Developer']" :type-speed="80" :erase-speed="50"/>
            </div>
        </div>

        
    </div>
</template>

<script>
    import VueWriter from 'vue-writer'

    export default {
        components: {VueWriter}
        }
</script>

<style lang="scss" scoped>

    .is-typed {
    font-family: 'Monaco';
    }
    .hero{
        padding: 300px 0;
        height: 400px;
        position: relative;

        h1{
            font-weight: 700;
            font-size: 80px;
            color: rgb(255, 255, 255);

            .symbol{
                color: rgb(187, 245, 255);
                font-weight: 500;
                vertical-align: middle;
                font-size: 100px;
            }
        }

        img{
            position: absolute;
            width: 70%;
            z-index: -1;
            // top: 0;
        }

        .writer{
            color: rgb(255, 255, 255);
        }
    }
</style>