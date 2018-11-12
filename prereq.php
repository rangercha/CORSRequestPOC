<?php
if (isset($_SERVER["HTTP_ORIGIN"]) === true) {
	$origin = $_SERVER["HTTP_ORIGIN"];

	header('Access-Control-Allow-Origin: ' . $origin);
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Content-Type, derpycustomheader');
	
	if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
		exit; // OPTIONS request wants only the policy, we can stop here
	}
	
} else {
	die;
}
	$sensitiveGuid='';
	$json = file_get_contents('php://input'); $obj = json_decode($json);
	
	if(isset($_COOKIE['goodAuth']) && $_COOKIE['goodAuth'] == '1f3870be274f6c49b3e31a0c6728957f'){
		if($obj->{'object'}==1155){
			$sensitiveGuid = 'a848a30a-0a21-4afe-a11b-09f9c83bd29b';
		}
	}
	$response = '{"sensitiveGuid":"' . $sensitiveGuid . '"}';
	echo $response;
?>