/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var short_url = '';

$('#myCarousel').carousel({
        interval: false
});

$('#upload-more-button').click(function(){
        window.location = window.location;
});

function judgeLoginStatus(){
        if(T.loginStatus){
                id_get = T.loginStatus().openid;
                $.ajax({
                        method: 'POST',
                        url: '/qqlogin',
                        data: {
                                'openid':id_get
                        },
                        dataType: 'json',
                        success : function(data){
                                status = data.status;
                                if(status == 'success'){
                                        user_id = data.id;
                                        user_name = data.username;
                                        $('#login-info').removeClass('hide').text(user_name);
                                        $('#login-button').addClass('hide');
                                }else{
                                        i=1;
                                }
                        }
                })
        }
}

$(document).ready(function(){
        $('#qq-login').click(function(){
                T_login();
                judgeLoginStatus();
        });
});

function shareClick() {
        var rrShareParam = {
                resourceUrl : $('#short-address').text(),	//分享的资源Url
                srcUrl : $('#short-address').text(),	//分享的资源来源Url,默认为header中的Referer,如果分享失败可以调整此值为resourceUrl试试
                pic : $('#content img').attr('src'),		//分享的主题图片Url
                title : '分享链接',		//分享的标题
                description : $('#short-address').text()	//分享的详细描述
        };
        rrShareOnclick(rrShareParam);
}