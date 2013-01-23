

function html_en_code(str){
        if(str=="")return("");
        str = str.replace(/&/ig, "&amp;");        // &
        str = str.replace(/>/ig, "&gt;");            // <
        str = str.replace(/'/ig, "&#39;");        // >
        str = str.replace(/</ig, "&lt;");            // '
        str = str.replace(/"/ig, "&quot;");        // "
        // str = str.replace(/\t/ig,"&nbsp;&nbsp;&nbsp;&nbsp;");        //Tab
        // str = str.replace(/\r/ig,"");                // 回车
        // str = str.replace(/\n\n/ig,"<p>");        // 换行
        // str = str.replace(/\n/ig,"<br/>");        // 换行 // str = str.replace(/\x20/ig,"&nbsp;");        // 空格
        return str;
// return document.getElementById("footer").innerText = str;
}


$(document).ready(function(){
		
		
        var es = window.location.toString().split('/');
        short_url = es[es.length - 1];
        
        $.ajax({
                type: 'POST',
                url:  prefixtion + 'get_info',
                dataType: 'JSON',
                data: {
                        'short_url': short_url
                },
                success: function(recieve){
                        if(recieve.status == '1'){
                                switch(recieve.type){
                                        case 'picture':
                                                $('#code_area').addClass('hide');
                                                $('#content').append('<img src="' + 'http://' + recieve.url + '!bc2">');
                                                break;
                                        case 'text':
                                        case 'code':
                                                // var str =html_en_code(recieve.content);
                                                // $('#content').append('<pre id="code_area" class="brush:css"></pre>');
                                                var str =recieve.content;
                                                select_type(recieve.post_fix);
                                                $('#content #code_area').text(str);
                                                SyntaxHighlighter.highlight();                                   		
                                                break;
                                        case 'others':
                                                $('#content').css('margin-top', '200px');
                                                
                                                $('#code_area').html('<a style = "display: block" href="http://' + recieve.url + '">下载文件: ' + recieve.filename + '</a>');
                                                break;                                      
                                }
                               
                        }
                }
        })
        
         
        
});
