<template>
    <div>
        <a-button @click="preview">预览word</a-button>
    </div>
</template>

<script>
    export default {
        name: "WordPreview",

        methods:{
            preview(){
                var file = "https://view.xdocin.com/doc/preview.docx";
                var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
                xurl += encodeURIComponent(file);
                var ops = {
                    // "_pdf": true, //word/excel文档尝试以pdf方式显示，默认false
                    // "_watermark": "XDOC文档预览", //水印文本，显示水印
                    // "_saveable": false, //是否允许保存PDF，默认true
                    // "_printable": false, //是否允许打印PDF，默认true
                    // "_copyable": false, //是否允许选择复制内容，默认true
                    // "_toolbar": false, //是否显示底部工具条，默认true
                    // "_title": "文档预览", //自定义标题
                    // "_expire": 30, //预览链接有效期，单位分钟，默认永久有效
                    // "_limit": "1,3", //限制页数，如：“5”表示只显示前5页，“2,5”表示从第2页开始的5页，对pdf/doc/docx/ppt/pptx有效
                };//传入预览参数
                for (var a in ops) {
                    xurl += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(ops[a]);
                }
                console.log(xurl);
                window.location.href = xurl;
            }
        }
    }
</script>

<style scoped>

</style>