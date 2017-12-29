 //eachar   晨爷
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
        'echarts/chart/line',// 使用柱状图就加载bar模块，按需加载
        'echarts/chart/bar'
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('lineChat')); 
        
      option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['银票网：yinpiao.cn','银票网：www.yinpiao.com']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['05月11日','05月12日','05月13日','05月14日','05月15日','05月16日','05月17日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'银票网：yinpiao.cn',
			            type:'line',
			            stack: '总量',
			            data:[0, 3000, 6000, 1900, 12000, 1000, 18000]
			        },
			    ]
			};

        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);


















