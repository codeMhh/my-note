<template>
    <div>
        <div id="myChart" :style="{width: '892px', height: '600px'}"></div>
    </div>
</template>

<script>
    let geoJson = require('../../public/map/guangdong.json')
    //模拟数据
    // let chartData = geoJson.features.map((item) => {
    //     return {
    //         value: (Math.random() * 1000).toFixed(2),
    //         name: item.properties.name
    //     }
    // });
    let chartData = []
    export default {
        name: "GuangdongMap",
        data() {
            return {
                myChart: null,
                chartData,
                geoJson,
                noDrillCity: ['中山市', '东莞市']   //非下钻名单
            }
        },
        mounted() {
            this.drawMap('广东省', this.geoJson['广东省']);
        },
        methods: {
            drawMap(map, data, mapData) {
                console.log(this.geoJson);
                //防止重复注册
                if (!this.$echarts.getMap(map)) this.$echarts.registerMap(map, data);

                this.myChart = this.$echarts.init(document.getElementById('myChart'))
                this.myChart.showLoading();

                // //todo
                console.log(data.features[0].name);
                mapData = data.features.map((item) => {
                    return {
                        value: (Math.random() * 1000).toFixed(2),
                        name: item.properties.name
                    }
                });
                let option = {
                    tooltip: {
                        backgroundColor: 'rgba(255,255,255,1)',
                        trigger: 'item',
                        formatter: function (item) {
                            var tipHtml = '';
                            tipHtml = '<div style="background:#fff;border-radius:10px;padding-top:10px">' +
                                '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                                '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                                '<span style="font-size:18px;font-weight:bold;">' + item.data.value + ' ' + '</span>' +
                                '</div>' + '</div>';
                            return tipHtml;
                        }
                    },
                    series: [{
                        name: '广东省数据',
                        type: 'map',
                        map, // 自定义扩展图表类型
                        aspectScale: 1,
                        zoom: 0.65, //缩放
                        showLegendSymbol: false,
                        label: {
                            show: true,
                            color: '#fff',
                            fontSize: 10
                        },
                        itemStyle: {
                            areaColor: '#0E95F1',
                            borderColor: '#e9e9e9',
                            borderWidth: 1,
                            shadowColor: '#0E95F1',
                            shadowBlur: 20,
                        },
                        emphasis: {
                            label: {
                                show: true,
                                color: '#fff',
                                fontSize: 10
                            },
                            itemStyle: {
                                areaColor: '#FFD181',
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        },
                        layoutCenter: ['50%', '50%'],
                        layoutSize: '160%',
                        markPoint: {
                            symbol: 'none'
                        },
                        data: mapData
                    }],
                }
                this.myChart.hideLoading();
                this.myChart.setOption(option);
                // this.showTips('广州市', data);
                // this.myChart.on("globalout", () => {
                //     setTimeout(() => {
                //         this.showTips('广州市', data)
                //     }, 1000)
                // })
                //监听点击事件
                this.myChart.on('click', (param) => {
                    console.log(param);
                    console.log(this.geoJson[param.name]);
                    if (this.geoJson[param.name]) {
                        //避免重复画地图
                        if (this.noDrillCity.includes(param.name)) return;
                        this.drawMap(param.name, this.geoJson[param.name], []);
                    }

                });
            },
            showTips(name, data) {
                data.forEach((item, i) => {
                    if (item.name.includes(name)) {
                        this.myChart.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 0,
                            dataIndex: i
                        });
                        this.myChart.dispatchAction({
                            type: 'mapSelect',
                            seriesIndex: 0,
                            dataIndex: i
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>