<template>
    <div class="img-uploader">
        <div ref="imgBox">
            <div class="img-uploader-preview" @click="uploadImgClick">
                点击
                <img src=""/>
                
            </div>
            <div>{{fileNum}}个文件|总大小为：{{fileSize}}</div>
        </div>
        <!-- @change="handleImgs(this.files) -->
        <input type="file" class="img-uploader-file" ref="fileinput" @change="handleImgs"/>
    </div>
</template>
<script>
export default {
    name: 'Television',
    props: [],
    data () {
        return {
            inputId: '',
            fileSize: '',
            fileNum: 0
        }
    },
    mounted: function() {
        let imgBox = this.$refs.imgBox;
        imgBox.addEventListener('dragenter', this.dragenter, false);
        imgBox.addEventListener('dragover', this.dragover, false);
        imgBox.addEventListener('drop', this.drop, false);
    },
    methods: {
        uploadImgClick () {//点击图片的时候上传
            let fileInput = this.$refs.fileinput.click();
        },
        handleImgs (files) {
            let _files = files || this.$refs.fileinput.files;
            this.updateSize(_files);
        },
        updateSize (files) {
            let nBytes = 0;
            let oFiles = files;
            let nFiles = oFiles.length;
            for (let nFileId = 0; nFileId < nFiles; nFileId++) {
                nBytes += oFiles[nFileId].size;
            }
            var sOutput = nBytes + "bytes";
            for (var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
                sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
            }
            this.fileNum = nFiles;
            this.fileSize = sOutput;
        },
        dragenter (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        dragover (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        drop (e) {
            e.stopPropagation();
            e.preventDefault();
            let dt = e.dataTransfer;
            let files = dt.files;
            this.handleImgs(files);
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
           left: 9999px;
       }
   }
</style>


