<template>
    <div>
        <a-button v-test="'edit'">测试</a-button>
    </div>
</template>

<script>

    export default {
        name: 'test',
        data() {
            return {}
        },
        mounted() {
        },
        methods: {},
        directives: {
            test:{
                inserted:(el,binding,vnode) => {
                    console.log(vnode.context.$route);

                }

            }
        }
    }
</script>

<style lang="less" scoped>

</style>
