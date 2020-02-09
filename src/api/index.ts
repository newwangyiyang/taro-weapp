import IHttp from '@/utils/request';

export const getProductor = () => {
	return IHttp.get('/ufmk2');
};
