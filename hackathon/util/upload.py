from upyun import *

pic_prefix = 'darkpic.b0.upaiyun.com'
file_prefix = 'darkcloud.b0.upaiyun.com'

postfix_list = ['jpge', 'jpg', 'gif', 'png']



def upload(path, input_file, postfix):

    if postfix in postfix_list:
        url = pic_prefix
        u = UpYun(bucket = 'darkpic', username = 'wang', password = '1qaz2wsx')
    else :
        url = file_prefix
        u = UpYun(bucket = 'darkcloud', username = 'wang', password = '1qaz2wsx')  
    u.setApiDomain('v0.api.upyun.com')
    data = input_file
    if data == None:
        print 'here' 
    u.setContentMD5(md5file(data))
    
    new_dir = str(int (time.time() * 1000000))
    u.mkDir('/' + new_dir)
    path ='/' + new_dir+ '/' +  path 

    rt = u.writeFile(path, data)
    
    if rt == False:
        return {'status':'fail'}

    width = u.getWritedFileInfo('x-upyun-width')
    height = u.getWritedFileInfo('x-upyun-height')
    rs = u.getFileInfo(path)
    if width == None:
        width = 0
    if height == None:
        height = 0;
    
    info = {};
    info = {'status': 'success','width': width, 'height': height, 'size': rs['size'] }
    info['url']  =  url +  path 
    print info
    return info

