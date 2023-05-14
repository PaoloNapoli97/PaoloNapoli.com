<template>
    <div class="container">
        <div class="hero d-flex align-items-center justify-content-center flex-column">

            <h1>
                <span class="symbol"> &#60;</span>
                  Paolo Napoli
                  <span class="symbol">/&#62;</span> 
            </h1>

            <div>
                <VueWriter class="fs-2 writer" :array="['Web Developer', 'Full Stack Web Developer', 'Front-End Developer', 'Back-End Developer', 'Software Developer', 'Vue Developer', 'Laravel Developer']" :type-speed="80" :erase-speed="50"/>
            </div>
        </div>

        <div class="my-works d-flex justify-content-center">
            <div class="row w-75">
                <div class="col-6">
                    <h2>
                        Alcuni del Miei Progetti
                    </h2>
                    <img src="../assets/img/heroImage.png" alt="">
                </div>
                <div class="col-6">2</div>
                
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

        .writer{
            color: rgb(255, 255, 255);
        }
    }

    .my-works{
        position: relative;
        padding-top: 300px;

        
        img{
            position: absolute;
            width: 30%;
            z-index: -1;
            top: 60%;
            // right: 5%;
        }

        h2{
            color: white;
            font-size: 50px;
        }
    }
</style>