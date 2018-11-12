These are some web app simulators for the purpose of testing CORS rules in a browser. To properly test, create a web server that supports PHP. The versions of Apache and PHP that ship with Kali Linux seem to work fine. Create a cors directory within the web server and copy all files into that directory. On Kali, this looks like

git clone https://github.com/rangercha/CORSRequestPOC.git
cd CORSRequestPOC
mkdir /var/www/html/cors
cp * /var/www/html/cors/

Create host file entries that point to your web server with the following site names:
good.local
evil.local

In a web browser, visit 
good.local/cors/realpage.html

next, visit
evil.local/cors/badpage.html

Your browser should use the authentication cookie gained by visiting good.local. The evil.local site should force XHR requests back to good.local that send the good.local authentication cookie.

For a more robust example of how XHR works and what is or isn't permitted, visit
evil.local/cors/xhrdemo.html

This site will generate XHR requests back to good.local. Some requests should work, some should not (per the W3C CORS specification). Viewing this network activity in a web browser's debugger will show the exact headers for requests and the responses. 
Ideally, this information will help application testers make better recommendations for software developers and system owners. 