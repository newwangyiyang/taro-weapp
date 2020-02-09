import Taro, { FC, useState, useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtDivider } from 'taro-ui';

const HelloWorld: FC = () => {
	const [num, setNum] = useState(0);
	useEffect(() => {
		const timeId = setInterval(() => {
			setNum((num) => num + 1);
		}, 1000);
		return () => clearInterval(timeId);
	}, []);

	const asyncDemo = () =>
		new Promise((resolve) => {
			setTimeout(() => resolve(100), 5000);
		});

	const doAsync = async () => {
		const res = await asyncDemo();
		console.log(res);
	};
	useEffect(() => {
		doAsync();
	}, []);

	return (
		<View>
			<AtDivider content="useState" />
			<View className="flex-center">
				<Text className="col-5">{num}</Text>
			</View>
			<AtDivider />
		</View>
	);
};

HelloWorld.options = {
	addGlobalClass: true
};

export default HelloWorld;
