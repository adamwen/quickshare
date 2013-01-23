from pyramid.view import view_config
from hackathon.util.read_file import *
from hackathon.models.info import Info

pic_list = ['jpg', 'jpge', 'png', 'gif']
text_list = ['as3', 'actionscript3', 'bash', 'shell', 'cf', 'coldfusion', 'c-sharp', 'csharp', 'cpp', 'c', 'css', 'delphi', 'pas', 'pascal', 'diff', 'patch', 'erl', 'erlang', 'groovy', 'js', 'jscript', 'javascript', 'java', 'jfx', 'javafx', 'jfx', 'javafx', 'perl', 'pl', 'php', 'plain', 'text', 'ps', 'powershell', 'py', 'python', 'rails', 'ror', 'ruby', 'scala', 'sql', 'vb', 'vbnet', 'xml', 'xhtml', 'xslt', 'html', 'xhtml']

@view_config(route_name = 'get_info', renderer = 'json')
def get_info(request):
    short_url = request.params['short_url']
    info = Info.out(request.db, short_url)
    if info == None:
        return {'status' : 'fail'} 
    
    info = dict(info) 
    info.pop('_id')
    info['type'] = 'others'
    
    if info['post_fix'] in pic_list :
        info['type'] = 'picture' 
        info['status'] = '1'
        return info
    
    path = info['url'][24: ]      
    if info['post_fix'] in text_list and int(info['size']) < 100000:
        info['type'] = 'code'  
        info['content'] = read_file(path)
        info['status'] = '1' 
        return info
    if info['post_fix'] == 'txt':
        info['type'] = 'text'
        info['status'] = '1'
        info['content'] = read_file(path)
        return info
    info['status'] = '1'
    return info
