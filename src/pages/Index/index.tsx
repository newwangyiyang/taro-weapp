import Taro, { FC, Dispatch } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import { AtButton, AtDivider, AtCountdown } from 'taro-ui';
import styles from './index.module.scss';

import ImageDemo from '../../assets/img/demo.jpg';
import HelloWorld from '@/components/HelloWorld';
import { useSelector, useDispatch } from '@tarojs/redux';
import { IRootState, IAction } from '@/store/index';
import { addNum, initProductor } from '@/store/Index/action';

const SwiperList = [
	{
		src:
			'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579937175748&di=53b01d117bc8130148a7db1fa4be646c&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1378323034%2C4076473278%26fm%3D214%26gp%3D0.jpg',
		id: 0
	},
	{
		src:
			'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579937270608&di=25fc1640bf390f7179bc3a39e2a763fb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F15%2F20170415121536_WVAPw.jpeg',
		id: 1
	},
	{
		src:
			'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579937270604&di=3f8bdcee000ba5c252020ea97f025822&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201601%2F16%2F20160116172551_My53E.thumb.700_0.jpeg',
		id: 2
	},
	{
		src: ImageDemo,
		id: 3
	}
];

const Index: FC = () => {
	const btnGoDetail = () => {
		Taro.navigateTo({
			url: '/pages/Detail/index?id=1&name=wyy'
		});
	};

	const btnGoTaroF2 = () => {
		Taro.navigateTo({
			url: '/pages/TaroF2/index'
		});
	};

	// redux
	const indexState = useSelector((state: IRootState) => state.index);
	const dispatch = useDispatch<Dispatch<IAction | Function>>();

	const addNumRedux = () => {
		dispatch(addNum());
	};

	const initProductorRedux = () => {
		dispatch(initProductor());
	};

	return (
		<View className={`${styles['index-wrap']}`}>
			<Swiper circular autoplay interval={3000} className={styles['swiper-wrap']}>
				{SwiperList.map((item) => (
					<SwiperItem key={item.id} className={styles['swiper-item']}>
						<View className={styles['swiper-item-view']}>
							<Image
								mode="widthFix"
								src={item.src}
								className={styles['swiper-item-image']}
							/>
						</View>
					</SwiperItem>
				))}
			</Swiper>
			<HelloWorld />
			<AtDivider content="Redux" />
			<View className="m-t-30 f-s-30 col-2 flex-center flex-space-a">
				<Text>{indexState.num}</Text>
				<AtButton size="small" onClick={addNumRedux}>
					AddNum
				</AtButton>
			</View>
			<AtDivider />
			<AtDivider content="Redux thunk" />
			<View className="m-t-30 f-s-30 col-2 flex-center flex-space-a">
				<View className="flex-col col-4">
					<Text>{indexState.productor}</Text>
					<Text>{indexState.color}</Text>
					<Text>{indexState.price}</Text>
					<Text>{indexState.type}</Text>
				</View>
				<AtButton size="small" onClick={initProductorRedux}>
					initProductor
				</AtButton>
			</View>
			<AtDivider />
			<View className="flex flex-space-a m-t-40">
				<AtButton size="small" onClick={btnGoDetail}>
					go Detail
				</AtButton>
				<AtButton type="primary" size="small" onClick={btnGoTaroF2}>
					go TaroF2
				</AtButton>
			</View>
		</View>
	);
};

Index.config = {
	navigationBarTitleText: '首页'
};
export default Index;
