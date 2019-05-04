<?php
if (isset($_SERVER["HTTP_ORIGIN"]) === true) {
	$origin = $_SERVER["HTTP_ORIGIN"];

	header('Access-Control-Allow-Origin: ' . $origin);
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Content-Type, derpycustomheader');
	
	if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
		exit; // OPTIONS request wants only the policy, we can stop here
	}
	
} else {
	die;
}
	$responseCode=403;
	
	if(isset($_COOKIE['goodAuth']) && $_COOKIE['goodAuth'] == '1f3870be274f6c49b3e31a0c6728957f'){
		echo "[{\"personnelnum\":\"1155\"},{\"personnelnum\":\"1255\"}]";
		$responseCode=200;
	}
	http_response_code($responseCode);

?>
