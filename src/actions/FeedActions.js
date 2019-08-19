import { AsyncStorage } from 'react-native';
import DevstagramAPI from '../DevstagramAPI';
import { logout } from  './AuthActions';

export const getFeed = () => {
	return(dispatch) => {

		dispatch({
			type:'changeFeedLoadingStatus',
			payload:{
				status: true
			}
		});

		AsyncStorage.getItem('jwt')
			.then((data) => {
				if(data != null && data != '') {
					DevstagramAPI.req({
						endpoint:'users/feed',
						method:'GET',
						data:{jwt:data},
						success:(json)=>{

							if(json.logged === true) {

								dispatch({
									type:'changeFeedLoadingStatus',
									payload:{
										status: false
									}
								});								

								dispatch({
									type:'incrementFeed',
									payload:{
										feed:json.data
									}
								});


							} else {
								dispatch(logout());
							}

						},
						error:(error)=>{
							alert("Erro na requisição");
							dispatch({
								type:'changeFeedLoadingStatus',
								payload:{
									status: true
								}
							});								
						}
					});
				} else {
					dispatch(logout());
				}
			})
			.catch(()=>{
				dispacth({
					type:'changeStatus',
					payload:{
						status:2
					}
				});
			});
	};
};