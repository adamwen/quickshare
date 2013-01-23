from pyramid.view import view_config
from hackathon.util.upload import upload
from hackathon.models.info import Info
from hackathon.util.shortURL import shortURL
from hackathon.util.filter_file import filter_file
from pyramid.response import Response
import urllib2
import time
import base64
import StringIO

@view_config(route_name = 'test', renderer='json')
def test(request):
    print request.POST
    filename = request.POST['file'].filename
    input_file = request.POST['file'].file

    try:
        post_fix = filename.split('.')[-1]
    except Exception, error:
        #The file don't has a post fix
        post_fix = None



    file_info = upload(urllib2.quote(filename.encode("utf8")), input_file, post_fix)

    print file_info['status']
    file_width = file_info['width']
    file_height = file_info['height']
    file_size = file_info['size']
    file_url = file_info['url']

    urlHash = shortURL(file_url)

    info = Info(urlHash, filename, file_url, post_fix, file_width, file_height, file_size, request.db)

    return info.short_url

    return Response('OK')
#encodedstring = filename[1].split(',')[1]


#    print encodedstring

@view_config(route_name = 'create', renderer = 'json')
def create(request):
#try:
        print request.POST
        file_dict = filter_file(request)

#filename = request.POST['file'].filename
#        input_file = request.POST['file'].file

        filename = file_dict['filename']
        input_file = StringIO.StringIO(file_dict['stream'])
        
        try:
            post_fix = filename.split('.')[-1]
        except Exception, error:
            #The file don't has a post fix
            post_fix = None



        file_info = upload(urllib2.quote(filename.encode('utf8')), input_file, post_fix)

        print file_info['status']
        file_width = file_info['width']
        file_height = file_info['height']
        file_size = file_info['size']
        file_url = file_info['url']

        urlHash = shortURL(file_url)

        info = Info(urlHash, filename, file_url, post_fix, file_width, file_height, file_size, request.db)

        return info.short_url

#    except Exception, error:
#        print '****'
#        print error
#        return {'status': 0}

