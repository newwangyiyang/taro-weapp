import { fixF2 } from 'taro-f2/dist/weapp/common/f2-tool';
import F2 from '@antv/f2';

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('@antv/f2/lib/component/guide/region-filter');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PieLabel = require('@antv/f2/lib/plugin/pie-label');

export const baseChart = (canvas, width, height) => {
	// ⚠️ 别忘了这行
	// 为了兼容微信与支付宝的小程序，你需要通过这个命令为F2打补丁
	fixF2(F2);

	const data = [
		{ genre: 'Sports', sold: 275 },
		{ genre: 'Strategy', sold: 115 },
		{ genre: 'Action', sold: 120 },
		{ genre: 'Shooter', sold: 350 },
		{ genre: 'Other', sold: 150 }
	];
	// 1、创建Chart对象
	const chart = new F2.Chart({
		el: canvas,
		width,
		height
	});
	// Step 2: 载入数据源
	chart.source(data);

	// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
	chart
		.interval()
		.position('genre*sold')
		.color('genre');

	// Step 4: 渲染图表
	chart.render();
};

export const galleryChart = (canvas, width, height) => {
	fixF2(F2);
	const data = [
		{
			year: '2012',
			sales: 850
		},
		{
			year: '2013',
			sales: 894
		},
		{
			year: '2014',
			sales: 912
		},
		{
			year: '2015',
			sales: 974
		},
		{
			year: '2016',
			sales: 997
		},
		{
			year: '2017',
			sales: 1013
		},
		{
			year: '2018',
			sales: 1130
		},
		{
			year: '2019',
			sales: 1204
		},
		{
			year: '2020',
			sales: 1250
		}
	];

	const chart = new F2.Chart({
		el: canvas,
		padding: ['auto', 30, 'auto', 'auto'],
		width,
		height
	});

	chart.source(data, {
		year: {
			range: [0, 1]
		},
		sales: {
			tickCount: 5
		}
	});
	chart.axis('year', {
		tickLine: {
			length: 4,
			lineWidth: 1,
			stroke: '#e8e8e8'
		}
	});
	chart.tooltip(false);
	chart.line().position('year*sales');
	chart
		.point()
		.position('year*sales')
		.style('year', {
			stroke: '#1890ff',
			lineWidth: 1,
			fill: '#FFF',
			r: function r(val) {
				if (Number(val) < 2018) {
					return 5;
				}
				return 0;
			}
		});

	chart.guide().regionFilter({
		start: ['64%', '0%'],
		end: ['100%', '100%'],
		color: '#fff',
		style: {
			lineDash: [3, 8]
		}
	});
	// 2018 年开始为预测数据
	const forecastData = data.slice(6);
	forecastData.forEach(function(obj) {
		chart.guide().point({
			position: [obj.year, obj.sales],
			style: {
				fill: '#1890ff',
				r: 3
			}
		});
		chart.guide().text({
			position: [obj.year, obj.sales],
			content: '$' + obj.sales,
			style: {
				fill: '#1890ff',
				textAlign: 'center'
			},
			offsetY: -15
		});
	});
	chart.guide().rect({
		start: ['2017', 'min'],
		end: ['max', 'max'],
		style: {
			fill: '#1890ff',
			fillOpacity: 0.05
		}
	});
	chart.guide().text({
		position: ['2017', 'max'],
		content: '预测',
		style: {
			fill: '#808080',
			textAlign: 'start',
			textBaseline: 'top',
			fontWeight: 'bold'
		},
		offsetX: 8,
		offsetY: 8
	});
	chart.render();
};

export const brokenLineChart = (canvas, width, height) => {
	fixF2(F2);
	const data = [
		{
			day: '周一',
			value: 300
		},
		{
			day: '周二',
			value: 400
		},
		{
			day: '周三',
			value: 350
		},
		{
			day: '周四',
			value: 500
		},
		{
			day: '周五',
			value: 490
		},
		{
			day: '周六',
			value: 600
		},
		{
			day: '周日',
			value: 900
		}
	];

	const chart = new F2.Chart({
		el: canvas,
		width,
		height
	});

	chart.source(data, {
		value: {
			tickCount: 5,
			min: 0
		},
		day: {
			range: [0, 1]
		}
	});
	chart.tooltip({
		showCrosshairs: true,
		showItemMarker: false,
		onShow: function onShow(ev) {
			const items = ev.items;
			items[0].name = null;
			items[0].value = '$ ' + items[0].value;
		}
	});
	chart.axis('day', {
		label: function label(_text, index, total) {
			const textCfg: any = {};
			if (index === 0) {
				textCfg.textAlign = 'left';
			} else if (index === total - 1) {
				textCfg.textAlign = 'right';
			}
			return textCfg;
		}
	});
	chart.line().position('day*value');
	chart
		.point()
		.position('day*value')
		.style({
			stroke: '#fff',
			lineWidth: 1
		});
	chart.render();
};

export const areaChart = (canvas, width, height) => {
	fixF2(F2);
	const data = [
		{
			time: '2016-08-08 00:00:00',
			tem: 10
		},
		{
			time: '2016-08-08 00:10:00',
			tem: 22
		},
		{
			time: '2016-08-08 00:30:00',
			tem: 16
		},
		{
			time: '2016-08-09 00:35:00',
			tem: 26
		},
		{
			time: '2016-08-09 01:00:00',
			tem: 12
		},
		{
			time: '2016-08-09 01:20:00',
			tem: 26
		},
		{
			time: '2016-08-10 01:40:00',
			tem: 18
		},
		{
			time: '2016-08-10 02:00:00',
			tem: 26
		},
		{
			time: '2016-08-10 02:20:00',
			tem: 12
		}
	];
	const chart = new F2.Chart({
		el: canvas,
		width,
		height
	});
	chart.source(data, {
		time: {
			type: 'timeCat',
			tickCount: 3,
			range: [0, 1]
		},
		tem: {
			tickCount: 5,
			min: 0
		}
	});

	chart.axis('time', {
		label: function label(_text, index, total) {
			const textCfg: any = {};
			if (index === 0) {
				textCfg.textAlign = 'left';
			} else if (index === total - 1) {
				textCfg.textAlign = 'right';
			}
			return textCfg;
		}
	});
	chart.tooltip({
		showCrosshairs: true
	});

	chart
		.area()
		.position('time*tem')
		.color('l(90) 0:#1890FF 1:#f7f7f7')
		.shape('smooth');
	chart
		.line()
		.position('time*tem')
		.color('l(90) 0:#1890FF 1:#f7f7f7')
		.shape('smooth');
	chart.render();
};

export const columnarChart = (canvas, width, height) => {
	fixF2(F2);

	const data = [
		{
			year: '2014 年',
			sales: 145
		},
		{
			year: '2015 年',
			sales: 121
		},
		{
			year: '2016 年',
			sales: 100
		},
		{
			year: '2017 年',
			sales: 97
		},
		{
			year: '2018 年',
			sales: 85
		}
	];
	const chart = new F2.Chart({
		el: canvas,
		width,
		height
	});

	chart.source(data, {
		sales: {
			tickCount: 5
		}
	});
	chart.tooltip({
		showItemMarker: false,
		onShow: function onShow(ev) {
			const items = ev.items;
			items[0].name = null;
			items[0].name = items[0].title;
			items[0].value = '¥ ' + items[0].value;
		}
	});

	chart
		.interval()
		.position('year*sales')
		.color('l(90) 0:#1890ff 1:#70cdd0'); // 定义柱状图渐变色
	chart.render();
};

export const pieChart = (canvas, width, height) => {
	fixF2(F2);
	const data = [
		{
			name: '其他消费',
			y: 6371664,
			const: 'const'
		},
		{
			name: '生活用品',
			y: 7216301,
			const: 'const'
		},
		{
			name: '通讯物流',
			y: 1500621,
			const: 'const'
		},
		{
			name: '交通出行',
			y: 586622,
			const: 'const'
		},
		{
			name: '饮食',
			y: 900000,
			const: 'const'
		}
	];

	const chart = new F2.Chart({
		el: canvas,
		width,
		height,
		plugins: PieLabel
	});

	chart.source(data);
	chart.coord('polar', {
		transposed: true,
		radius: 0.75
	});
	chart.legend(false);
	chart.axis(false);
	chart.tooltip(false);

	// 添加饼图文本
	chart.pieLabel({
		sidePadding: 40,
		label1: function label1(data, color) {
			return {
				text: data.name,
				fill: color
			};
		},
		label2: function label2(data) {
			return {
				text:
					'￥' +
					String(Math.floor(data.y * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
				fill: '#808080',
				fontWeight: 'bold'
			};
		}
	});

	chart
		.interval()
		.position('const*y')
		.color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864'])
		.adjust('stack');
	chart.render();
};
export const pointChart = (canvas, width, height) => {
	fixF2(F2);
	const data = [
		{
			x: 95,
			y: 95,
			z: 13.8,
			name: 'BE',
			country: 'Belgium'
		},
		{
			x: 86.5,
			y: 102.9,
			z: 14.7,
			name: 'DE',
			country: 'Germany'
		},
		{
			x: 80.8,
			y: 91.5,
			z: 15.8,
			name: 'FI',
			country: 'Finland'
		},
		{
			x: 80.4,
			y: 102.5,
			z: 12,
			name: 'NL',
			country: 'Netherlands'
		},
		{
			x: 80.3,
			y: 86.1,
			z: 11.8,
			name: 'SE',
			country: 'Sweden'
		},
		{
			x: 78.4,
			y: 70.1,
			z: 16.6,
			name: 'ES',
			country: 'Spain'
		},
		{
			x: 74.2,
			y: 68.5,
			z: 14.5,
			name: 'FR',
			country: 'France'
		},
		{
			x: 73.5,
			y: 83.1,
			z: 10,
			name: 'NO',
			country: 'Norway'
		},
		{
			x: 71,
			y: 93.2,
			z: 24.7,
			name: 'UK',
			country: 'United Kingdom'
		},
		{
			x: 69.2,
			y: 57.6,
			z: 10.4,
			name: 'IT',
			country: 'Italy'
		},
		{
			x: 68.6,
			y: 20,
			z: 16,
			name: 'RU',
			country: 'Russia'
		},
		{
			x: 65.5,
			y: 126.4,
			z: 35.3,
			name: 'US',
			country: 'United States'
		},
		{
			x: 65.4,
			y: 50.8,
			z: 28.5,
			name: 'HU',
			country: 'Hungary'
		},
		{
			x: 63.4,
			y: 51.8,
			z: 15.4,
			name: 'PT',
			country: 'Portugal'
		},
		{
			x: 64,
			y: 82.9,
			z: 31.3,
			name: 'NZ',
			country: 'New Zealand'
		}
	];
	const chart = new F2.Chart({
		el: canvas,
		height,
		width
	});
	chart.source(data, {
		x: {
			alias: 'Daily fat intake', // 定义别名
			tickInterval: 5, // 自定义刻度间距
			nice: false, // 不对最大最小值优化
			max: 96, // 自定义最大值
			min: 62 // 自定义最小是
		},
		y: {
			alias: 'Daily sugar intake',
			tickInterval: 50,
			nice: false,
			max: 165,
			min: 0
		},
		z: {
			alias: 'Obesity(adults) %'
		}
	});
	// 开始配置坐标轴
	chart.axis('x', {
		label: function label(text) {
			return {
				text: text + ' gr' // 格式化坐标轴显示文本
			};
		},
		grid: {
			stroke: '#d9d9d9',
			lineWidth: 1,
			lineDash: [2, 2]
		}
	});
	chart.axis('y', {
		line: F2.Util.mix({}, F2.Global._defaultAxis.line, {
			top: false
		}),
		label: function label(text) {
			if (text > 0) {
				return {
					text: text + ' gr'
				};
			}
		}
	});
	chart.tooltip(false);
	chart
		.point()
		.position('x*y')
		.color('#1890ff')
		.size('z', [10, 40])
		.shape('circle')
		.style({
			lineWidth: 1,
			stroke: '#1890ff',
			opacity: 0.3
		});

	// 绘制辅助文本
	data.forEach(function(item) {
		chart.guide().text({
			position: [item.x, item.y],
			content: item.name,
			style: {
				textAlign: 'center',
				textBaseline: 'middle',
				fill: '#1890FF'
			}
		});
	});
	chart.render();
};
