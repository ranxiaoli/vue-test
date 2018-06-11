<template>
    <div class="img-uploader">
        <div ref="imgBox">
            <div class="img-uploader-preview" @click="uploadImgClick">
                点击
                <img src=""/>
            </div>
        </div>
        <input type="file" class="img-uploader-file" ref="fileinput" @change="handleImgs"/>
    </div>
</template>
<script>
export default {
    name: 'Television',
    props: [],
    data () {
        return {
            inputId: ''
        }
    },
    mounted: function() {
    },
    methods: {
        uploadImgClick () {//点击图片的时候上传
            let fileInput = this.$refs.fileinput.click();
        },
        handleImgs () {

        }

    }
}
</script>
<style lang="less">
   .img-uploader {
       &-preview {
           height: 200px;
           width: 400px;
           border: solid 1px #ccc;
       }
       &-file {
           position: absolute;
           left: 999px;
       }
   }
</style>


