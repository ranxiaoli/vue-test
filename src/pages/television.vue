<template>
    <div class="img-uploader">
        <div ref="imgBox">
            <div class="img-uploader-preview" @click="uploadImgClick">
                <img src="" ref="imgPreview"/>
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
            fileNum: 0,
            imgSrc: ''
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
            let _files;
            if(files.length) {
                _files = files;
            } else {
                _files = this.$refs.fileinput.files;
            }
            for (let i = 0; i < _files.length; i++) {
                let file = _files[i];
                let imgType = /^image\//;
                if (!imgType.test(file.type)) {
                    continue;
                }
                let img = this.$refs.imgPreview;
                
                let reader = new FileReader();
                reader.onload = (function(aImg) {
                    return function(e) {
                        aImg.src = e.target.result;
                    }
                })(img);
                reader.readAsDataURL(file);
            }
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
           img {
               height: 200px;
               width: 400px;
           }
       }
       &-file {
           position: absolute;
           left: 9999px;
       }
   }
</style>


