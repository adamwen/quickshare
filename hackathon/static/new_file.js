function updata(f) {
        var xhr = new XMLHttpRequest();
        var url = prefixtion + 'create' + postfixtion;
        var content = f;
        xhr.open("POST", url, true);

        if (window.FormData) {
                var formData = new FormData();
                formData.append('file', content);

                var data = formData;

        }
        xhr.upload.addEventListener("progress", function(e) {
                if (e.lengthComputable) {
                        var percentage = Math.round((e.loaded * 100) / e.total);
                        percentage += '%';
                        $(".progress .bar").animate({
                                width : percentage
                        });
                }
        }, false);

        xhr.send(data);
        xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {

                        setTimeout(function() {
                                var short_url = '';

                                short_url = xhr.responseText.toString().substring(1, xhr.responseText.toString().length - 1);
                                $('#short-address').text(prefixtion + 'i/' + short_url);
                                $.ajax({
                                        type : 'POST',
                                        url : prefixtion + 'get_info',
                                        dataType : 'JSON',
                                        data : {
                                                'short_url' : short_url
                                        },
                                        success : function(recieve) {
                                                if (recieve.status == '1') {
                                                        switch(recieve.type) {
                                                                case 'picture':
                                                                        $('#code_area').addClass('hide');
                                                                        $('#content img').attr('src', 'http://' + recieve.url + '!bc1');
                                                                        break;
                                                                case 'text':
                                                                case 'code':
                                                                        var str = recieve.content;
                                                                        select_type(recieve.post_fix);
                                                                        $('#content #code_area').text(str);
                                                                        SyntaxHighlighter.highlight();
                                                                        break;
                                                                case 'others':
                                                                        $('#content').css('margin-top', '200px');
                                                                        $('#code_area').html('<a style = "display: block" href="http://' + recieve.url + '">下载文件: ' + recieve.filename + '</a>');
                                                        }
                                                        $('#bin').fadeIn();
                                                        $('#bin').attr('src', 'http://2.gaosu.com/api.php?text=' + recieve.url);
                                                }
                                        }
                                })

                                $('.slide-container').animate({
                                        top : -800
                                }, function() {
                                        $('.success-container').animate({
                                                top : 0
                                        }, function() {
                                                $('.success-container').animate({
                                                        top : -160
                                                }, function() {
                                                        $('.success-container').animate({
                                                                top : 0
                                                        }, function() {
                                                                $('.success-container').animate({
                                                                        top : -32
                                                                }, function() {
                                                                        $('.success-container').animate({
                                                                                top : 0
                                                                        }, function() {
                                                                                $('#foot-bar').animate({
                                                                                        bottom : -10
                                                                                });
                                                                        });
                                                                });
                                                        });
                                                });
                                        });
                                });
                        }, 1500);
                }
        }
}


$(document).ready(function() {

        if (window.FileReader) {

                var list = document.getElementById('list'), cnt = document.getElementById('container');

                function isImage(type) {
                        switch (type) {
                                case 'image/jpeg':
                                case 'image/png':
                                case 'image/gif':
                                case 'image/bmp':
                                case 'image/jpg':
                                        return true;
                                default:
                                        return true;
                        //false;
                        }
                }

                function handleFileSelect(evt) {
                        evt.stopPropagation();
                        evt.preventDefault();

                        var files = evt.dataTransfer.files;

                        $('#myCarousel').carousel('next');

                        for (var i = 0, f; f = files[i]; i++) {

                                var t = f.type ? f.type : 'n/a', reader = new FileReader(), looks = function(f, img) {
                                }, isImg = isImage(t), img;

                                // 处理得到的图片
                                if (isImg) {
                                        reader.onload = (function(theFile) {
                                                return function(e) {
                                                        es = e.target.result.split(';');
                                                        post_data = 'filename:' + theFile.name + ';' + es[1];
                                                        updata(post_data);
                                                        looks(theFile, img);
                                                };
                                        })(f)
                                        reader.readAsDataURL(f);
                                } else {
                                        img = '"o((>ω< ))o"，你传进来的不是图片！！';
                                        looks(f, img);
                                }

                        }

                }

                // 处理插入拖出效果
                function handleDragEnter(evt) {
                        this.setAttribute('style', 'border-style:dashed;');
                }

                function handleDragLeave(evt) {
                        this.setAttribute('style', '');
                }

                // 处理文件拖入事件，防止浏览器默认事件带来的重定向
                function handleDragOver(evt) {
                        evt.stopPropagation();
                        evt.preventDefault();
                }


                cnt.addEventListener('dragenter', handleDragEnter, false);
                cnt.addEventListener('dragover', handleDragOver, false);
                cnt.addEventListener('drop', handleFileSelect, false);
                cnt.addEventListener('dragleave', handleDragLeave, false);

        } else {
                document.getElementById('section').innerHTML = '你的浏览器不支持啊，同学';
        }

})
