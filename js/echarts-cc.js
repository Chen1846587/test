$(document).ready(function() {
    //榜单 报告 统计
    $(function() {
        $(".list_title li span").click(function() {
            $(".curr").removeClass("curr");
            $(this).addClass("curr")
        });
    });

    $(function() {
        $(".list_item").each(function(i) {
            $(this).click(function() {
                $(".header-slider-item").css("display", "none");
                $(".header-slider-item").eq(i).css("display", "block");
            });
        });
    });

    //按时间来显示
    $(function() {
        var pic_length = $('#gd li').length;
        var n = 0;
        $('#toleft').click(function() {
            if (!$('#gd').is(':animated') && n) {
                $('#gd').animate({ left: '+=110px' }, 500);
                n--;
            }
        });
        $('#toright').click(function() {
            if (!$('#gd').is(':animated') && pic_length > n + 5) {
                $('#gd').animate({ left: '-=110px' }, 500);
                n++;
            };
        });
    });

    //echart
    // 路径配置

    require.config({
        paths: {
            echarts: 'build/dist'
        }
    });
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/line', // 使用柱状图就加载bar模块，按需加载
            'echarts/chart/bar'
        ],

        /*折线*/
        function(ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('lineChatcz'));

            option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['金评社']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    splitNumber: 2,
                    scale: true,
                    boundaryGap: false,
                    data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时', '24时']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name: '金评社',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, ]
            };

            // 为echarts对象加载数据 
            myChart.setOption(option);
        }
    );





    /*饼型图*/
    require(
        [
            'echarts',
            'echarts/chart/pie', // 使用柱状图就加载bar模块，按需加载

        ],

        /*饼型*/
        function(ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('barChatcs'));

            option = {
                title: {
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    left: '100',
                    data: ['北京', '上海', '广州', '深圳', '其他']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '北京' },
                        { value: 310, name: '上海' },
                        { value: 234, name: '广州' },
                        { value: 135, name: '深圳' },
                        { value: 1548, name: '其他' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };

            // 为echarts对象加载数据 
            myChart.setOption(option);
        }
    );





});
