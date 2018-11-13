<?php
if (isset($_SERVER["HTTP_ORIGIN"]) === true) {
	$origin = $_SERVER["HTTP_ORIGIN"];
	
	$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];


	if (strpos($url,'accessControlStarWithCreds') !== false) {

		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Credentials: true');
		//header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: Content-Type, authorization');
		echo '{"operationExecuted":"accessControlStarWithCreds"}';
		if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
			exit; // OPTIONS request wants only the policy, we can stop here
		}
	}
	if (strpos($url,'accessControlCredsAuthNoHeaderAllowed') !== false) {

		header('Access-Control-Allow-Origin: ' . $origin);
		header('Access-Control-Allow-Credentials: true');
		//header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: Content-Type');
		echo '{"operationExecuted":"accessControlCredsAuthNoHeaderAllowed"}';
		if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
			exit; // OPTIONS request wants only the policy, we can stop here
		}
	}
	if (strpos($url,'PassCredsAuthHeaderAllowed') !== false) {

		header('Access-Control-Allow-Origin: ' . $origin);
		header('Access-Control-Allow-Credentials: true');
		//header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: Content-Type, Authorization');
		echo '{"operationExecuted":"PassCredsAuthHeaderAllowed"}';
		if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
			exit; // OPTIONS request wants only the policy, we can stop here
		}
	}
	if (strpos($url,'PassCredsPostPlainAllowed') !== false) {

		header('Access-Control-Allow-Origin: ' . $origin);
		header('Access-Control-Allow-Credentials: true');
		//header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: Content-Type, Authorization');
		echo '{"operationExecuted":"PassCredsPostPlainAllowed"}';
		if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
			exit; // OPTIONS request wants only the policy, we can stop here
		}
	}
	if (strpos($url,'PassreadResponseHeader') !== false) {

		header('Access-Control-Allow-Origin: ' . $origin);
		header('Access-Control-Allow-Headers: Content-Type');
		header('Access-Control-Expose-Headers: secret_header');
		header('secret_header: PassreadResponseHeaderAllowed');
		if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
			exit; // OPTIONS request wants only the policy, we can stop here
		}
	}
	if (strpos($url,'FailreadResponseHeader') !== false) {

		header('Access-Control-Allow-Origin: ' . $origin);
		//header('Access-Control-Allow-Headers: Content-Type');
		header('secret_header: PassreadResponseHeaderAllowed');
		if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
			exit; // OPTIONS request wants only the policy, we can stop here
		}
	}
} else {
	die;
}
	
?>