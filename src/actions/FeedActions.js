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
										// feed:[]
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

export const likePhoto = (id, is_liked) => {

	return(dispatch) => {

		let method = '';
		if(is_liked) {
			method = 'DELETE';

			dispatch({
				type: 'removeLike',
				payload:{
					id:id
				}
			})
			
		} else {
			method = 'POST';
			dispatch({
				type:'addLike',
				payload:{
					id:id
				}
			})

		}

		// alert("Requisicao: "+method+" ao id "+id)

		AsyncStorage.getItem('jwt')
			.then((data) => {
				if(data != null && data != '') {

					let endpoint = 'photos/'+id+'/like';

					DevstagramAPI.req({
						endpoint:endpoint,
						method:method,
						data:{jwt:data},
						success:(json)=>{
							if(json.logged === true) {

								if(json.error != '') {
									alert(json.error);

									if(is_liked) {
										dispatch({
											type:'addLike',
											payload:{
												id:id
											}
										});
									} else{
										dispatch({
											type:'removeLike',
											payload:{
												id:id
											}
										});
									}
								}

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

		
	
}
