server='http://good.local';
function runXHR(){
	sessionStorage.removeItem("sensitiveGuid");
	authXHR();
	
}

function authXHR(){
	var url = server + '/cors/authenticate.php'
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var responseArray = JSON.parse(oReq.responseText);
				
				sessionStorage.setItem("authToken", responseArray['token']);
			}
		}
	};
	params="{\"user\":\"admin\",\"password\":\"L3g!tP@ssw0rd#\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-type", "application/json");
	//oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
	
	
}

