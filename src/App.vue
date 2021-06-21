<template>
    <div id="app">
        <a-row type="flex">
            <a-col :span="6">
                <a-menu style="width: 256px;height:100vh" mode="inline" v-model="current" @select="handleSelect">
                    <a-menu-item v-for="item in routes" :key="item.path">{{item.name}}</a-menu-item>
                </a-menu>
            </a-col>
            <a-col :span="18">
                <router-view/>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import {routes} from './router'

    export default {
        name: 'App',
        data() {
            return {
                routes,
                current: [routes[0].path]
            }
        },
        watch: {
            '$route.path': {
                handler(newVal) {
                    this.current = [newVal]
                },
                immediate: true
            }
        },
        created() {
            console.log(this.routes);
        },
        methods: {
            handleSelect({selectedKeys, key}) {
                this.$router.push({path: key})
                this.current = selectedKeys
            }
        }
    }
</script>

<style lang="less" scoped>
    body {
        margin: 0;
        padding: 0;
    }

    #app {

    }

</style>
