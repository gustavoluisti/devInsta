const devUrl = 'https://alunos.b7web.com.br/apis/devstagram/';

const DevstagramAPI = {

	req:(options)=>{

		let urlSuffix = '';
		let urlMethod = 'GET';
		let urlData = {};
		let urlSuccess = ()=>{};
		let urlError = ()=>{};

		if(options.endpoint) {
			urlSuffix = options.endpoint;
		}
		if(options.method){
			urlMethod = options.method;
		}
		if(options.data){
			urlData = options.data;
		}
		if(options.success){
			urlSuccess = options.success;
		}
		if(options.error){
			urlError = options.error;
		}

		let endpoint = devUrl+urlSuffix;
		let jsonData = JSON.stringify(urlData);

		if(urlMethod == 'GET') {
			jsonData = null;

			let query = '';
			for(let i in urlData) {
				query += encodeURIComponent(i)+'='+encodeURIComponent(urlData[i])+'&';
			}

			endpoint += '?'+query;

		}

		fetch(endpoint, {
			method:urlMethod,
			body: jsonData
		})
		.then((r)=>r.json())
		.then(urlSuccess)
		.catch(urlError);

	}

};

export default DevstagramAPI;