var prefixtion = "http://10.42.0.1:6543";
var postfixtion = '?callback=?';
var sep="";

function updata (f)
		{
			var xhr =new XMLHttpRequest() ;
			var url =prefixtion + '/create' + postfixtion;
			var boundary ='---------------------'+new Date().getTime();
			var fileName =f.name;
			var content =f;
			xhr.open("POST", url ,true); //+"?random="+Math.floor(Math.random()*100000001), true);
			//xhr.setRequestHeader("enctype","multipart/form-data;")
			
			if (window.FormData) {
				var formData = new FormData();
				// formData.
				// formData.append ('some_things' ,'*****************************');
				// formData
				// formData.append('file_name' ,fileName);
				// formData.append('hostid','12345');
				formData.append('file' ,content);
				
				// formData.append('requestToken', t);
　				var data = formData;
			
			}
			xhr.send(data);
		
			xhr.upload.addEventListener("progress", function(e) {  
    		if (e.lengthComputable) {  
        		var percentage = Math.round((e.loaded * 100) / e.total);  
        		percentage +='%';
        		$(".progress .bar").animate({width:percentage});
        		
        		img.style.opacity = 1-percentage/100.0;  
    		}  
			}, false);  
		
		
		}
		
		
		



$(document).ready (function (){
	
	if (window.FileReader) {

		var list = document.getElementById('list'),
			cnt = document.getElementById('container');

		// 判断是否图片
		function isImage(type) {
			switch (type) {
			case 'image/jpeg':
			case 'image/png':
			case 'image/gif':
			case 'image/bmp':
			case 'image/jpg':
				return true;
			default:
				return true;//false;
			}
		}

// 显示进度条的code*****************************

// $("p").animate({width:"50%"});



		// 处理拖放文件列表
		function handleFileSelect(evt) {
			evt.stopPropagation();
			evt.preventDefault();

			var files = evt.dataTransfer.files;

			for (var i = 0, f; f = files[i]; i++) {

				var t = f.type ? f.type : 'n/a',
					reader = new FileReader(),
					looks = function (f, img) {
						list.innerHTML += '<li><strong>' + f.name + '</strong> (' + t +
							') - ' + f.size + ' bytes<p>' + img + '</p></li>';
						cnt.innerHTML = img;
					},
					isImg = isImage(t),
					img;

				// 处理得到的图片
				if (isImg) {
					reader.onload = (function (theFile) {
						return function (e) {
							img = '<img class="preview" src="' + e.target.result + '" title="' + theFile.name + '"/>';
							es=e.target.result.split(';');
							//est=es[0].split(':');
							//est[0]='Content-Type';
							// pre_header='';//'; filename="'+theFile.name+'";';
							// es[0]=pre_header+est[0]+':'+est[1];
							post_data='filename:'+theFile.name+';'+es[1];
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
		function handleDragEnter(evt){ this.setAttribute('style', 'border-style:dashed;'); }
		function handleDragLeave(evt){ this.setAttribute('style', ''); }

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
