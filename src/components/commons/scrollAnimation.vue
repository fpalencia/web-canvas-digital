<template>
    <div class="percent">
        <div class="counter"><p>{{counter}}%</p></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: '0'
        }
    },

    methods: {
        scrollAnimation() {
        const vm = this

        function progress() {
            let windowScrollTop = window.scrollY
            let docHeight = document.documentElement.scrollHeight
            let windowHeight = window.innerHeight
            let progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

            vm.counter = Math.round(progress)

        }
        progress();
        window.onscroll = ("scroll", progress)
        }
    },

    mounted() {
        this.scrollAnimation()
    }
}
</script>