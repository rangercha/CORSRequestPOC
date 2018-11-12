server='http://good.local';
function runXHR(){
	sessionStorage.removeItem("sensitiveGuid");
	FailaccessControlStarWithCreds();
	FailaccessControlCredsAuthNoHeaderAllowed();
	PassCredsAuthHeaderAllowed();
	PassCredsPostPlainAllowed();
}

function FailaccessControlStarWithCreds(){
	var testName = 'FailaccessControlStarWithCreds';
	var url = server + '/cors/xhrdemo.php/' + testName;
	console.log(url);
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var responseObject=JSON.parse(oReq.responseText);
				var procedureName = responseObject['operationExecuted'];
				if (procedureName != undefined){
					document.getElementById(testName).innerHTML = "Success:" + procedureName;
				}
			}
		}
	};
	params="{\"operation\":\"" + testName + "\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-Type", "application/json");
	oReq.setRequestHeader("Authorization", "test_value");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
	document.getElementById(testName).innerHTML = "Failed:" + testName;
}
function FailaccessControlCredsAuthNoHeaderAllowed(){
	var testName = 'FailaccessControlCredsAuthNoHeaderAllowed';
	var url = server + '/cors/xhrdemo.php/' + testName;
	console.log(url);
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var responseObject=JSON.parse(oReq.responseText);
				var procedureName = responseObject['operationExecuted'];
				if (procedureName != undefined){
					document.getElementById(testName).innerHTML = "Success:" + procedureName;
				}
			}
		}
	};
	params="{\"operation\":\"" + testName + "\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-Type", "application/json");
	oReq.setRequestHeader("Authorization", "test_value");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
	document.getElementById(testName).innerHTML = "Failed:" + testName;
}
function PassCredsAuthHeaderAllowed(){
	var testName = 'PassCredsAuthHeaderAllowed';
	var url = server + '/cors/xhrdemo.php/' + testName;
	console.log(url);
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var responseObject=JSON.parse(oReq.responseText);
				var procedureName = responseObject['operationExecuted'];
				if (procedureName != undefined){
					document.getElementById(testName).innerHTML = "Success:" + procedureName;
				}
			}
		}
	};
	params="{\"operation\":\"" + testName + "\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-Type", "application/json");
	oReq.setRequestHeader("Authorization", "test_value");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
	document.getElementById(testName).innerHTML = "Failed:" + testName;
}
function PassCredsPostPlainAllowed(){
	var testName = 'PassCredsPostPlainAllowed';
	var url = server + '/cors/xhrdemo.php/' + testName;
	console.log(url);
	var oReq = new XMLHttpRequest();
	
	oReq.onload = function () {
		if (oReq.readyState === oReq.DONE) {
        		if (oReq.status === 200) {
            			console.log(oReq.responseText);
				var responseObject=JSON.parse(oReq.responseText);
				var procedureName = responseObject['operationExecuted'];
				if (procedureName != undefined){
					document.getElementById(testName).innerHTML = "Success:" + procedureName;
				}
			}
		}
	};
	params="{\"operation\":\"" + testName + "\"}";
	oReq.open("POST", url);
	oReq.setRequestHeader("Content-Type", "text/plain");
	oReq.setRequestHeader("Authorization", "test_value");
	oReq.withCredentials = true;
	oReq.responseType = "text";
	oReq.send(params);
	document.getElementById(testName).innerHTML = "Failed:" + testName;
}