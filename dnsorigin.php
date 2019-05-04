<?php
if (isset($_SERVER["HTTP_ORIGIN"]) === true) {
	$origin = $_SERVER["HTTP_ORIGIN"];

	header('Access-Control-Allow-Origin: ' . $origin);
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Content-Type');
	
	if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
		exit; // OPTIONS request wants only the policy, we can stop here
	}
	$stringmatch=preg_match('/good.local/', $origin);
	$noanchor=preg_match('/good\.local/', $origin);
	$goodanchor=preg_match('/$.*good\.local^/', $origin);

	print "{\"stringmatch\":\""
} else {
	die;
}

?>