/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var prefixtion = "http://10.42.0.1:6543/";
var postfixtion = '?callback=?';
var sep="";

function T_login(){
		T.init({
        	appkey:801288266 
    	});
		T.login(function (loginStatus) {

	    },function (loginError) {

	    });
	    status = T.loginStatus();
	}
	