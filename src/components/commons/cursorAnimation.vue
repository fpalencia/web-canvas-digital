<template>
<div>
    <div class="cursor"></div>
    <div class="cursor2"></div>
</div>
</template>

<script>
export default {
    methods: {
        cursorAnimation() {
        let cursor = document.querySelector(".cursor")
        let cursor2 = document.querySelector(".cursor2")

        document.addEventListener("mousemove",function(e) {
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });
        }
    },

    mounted() {
        this.cursorAnimation()
    }
}
</script>