<template>
    <div class="home">
<!--        <img alt="Vue logo" id="image" ref="cropperImg" src="../assets/images/1.jpg">-->
        <hello-world :msg="'how'" v-if="isshow" @up="ups"></hello-world>
        <p v-is-show></p>
    </div>
</template>
<style>
    .inpuFile {
        display: none;
    }
    .previewBox, .previewBoxRound {
        box-shadow: 0 0 5px #adadad;
        width: 100px;
        height: 100px;
        margin-top: 30px;
        overflow: hidden; /*这个超出设置为隐藏很重要，否则就会整个显示出来了*/
    }
    .previewBoxRound {
        border-radius: 50%; /*设置为圆形*/
    }
</style>
<script>
    import 'cropperjs/dist/cropper.css';
    import Cropper from 'cropperjs';
    // @ is an alias to /src
    export default {
        name: 'home',
        data() {
            return {
                msg: 10.65,
                isshow:true,
            }
        },
        created() {
            this.create()
        },
        methods: {
            create() {
                let cats = new cat("damao", "xiaomao ")
                console.log(cats.name)
            },
            ups(e){
                this.isshow=false
            }
        }
    }
    function cat(name, color) {
        this.name = name;
        this.color = color;
    }
</script>