import Taro, { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { F2Canvas } from 'taro-f2';

import styles from './index.module.scss';
import {
	baseChart,
	galleryChart,
	brokenLineChart,
	areaChart,
	columnarChart,
	pieChart,
	pointChart
} from './charts-demo';
import { AtDivider } from 'taro-ui';

const chartObj = {
	baseChart,
	galleryChart,
	brokenLineChart,
	areaChart,
	columnarChart,
	pieChart,
	pointChart
};

const TaroF2: FC = () => {
	return (
		<View>
			{Object.keys(chartObj).map((chartName) => {
				return (
					<View key={chartName}>
						<AtDivider content={chartName} />
						<View className={styles['chart-item']}>
							<F2Canvas onCanvasInit={chartObj[chartName]} />
						</View>
					</View>
				);
			})}
		</View>
	);
};

TaroF2.config = {
	navigationBarTitleText: 'TaroF2'
};

export default TaroF2;
