from pyramid.view import view_config
from pyramid.response import Response

@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project':'hackathon'}



@view_config(route_name='html')
def html(request):
    filename = './html/' + request.matchdict['filename']

    files = open(filename, 'r')

    print files.read()

    return Response('OK')
