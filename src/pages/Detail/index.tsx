import Taro, { FC, useDidShow, useRouter, Dispatch } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';
import { IUserState } from 'src/store/home/reducer';
import { useSelector, useDispatch } from '@tarojs/redux';
import { AtButton } from 'taro-ui';
import { IAction, IRootState } from '@/store/index.ts';
import { initUserData } from '@/store/home/action';
const Detail: FC = () => {
	const router = useRouter();

	useDidShow(() => {
		// 路由参数示例
		console.log(router.params);
	});

	// redux示例
	const user: IUserState = useSelector((state: IRootState) => state.home);
	const dispatch = useDispatch<Dispatch<IAction>>();

	const initUserRedux = () => {
		const user: IUserState = {
			userId: 0,
			username: '王一扬',
			password: '111',
			age: 0,
			sex: 1,
			token: '',
			auth: ''
		};
		dispatch(initUserData(user));
	};

	return (
		<View className={`${styles['detail-wrap']} flex-center flex-col flex-space-a`}>
			<Text className="f-s-30 col-2">redux username: {user.username || '未知'}</Text>
			<AtButton onClick={initUserRedux}>init user</AtButton>
		</View>
	);
};

Detail.config = {
	navigationBarTitleText: 'Detail'
};

export default Detail;
