from pyramid.view import view_config
from pyramid.response import Response
import os

@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project':'hackathon'}



@view_config(route_name='home_jiang', renderer='templates/home.pt')
def home(request):
    return {}


@view_config(route_name='index', renderer='templates/index.pt')
def index(request):
    return {}

@view_config(route_name='preview', renderer='templates/preview.pt')
def preview(request):
    return {}


@view_config(route_name='pull')
def pull(request):
    os.system('git pull')

    return Response('Pull complete')


@view_config(route_name='tencent', renderer='templates/qq.pt')
def qq(request):
    return {}

@view_config(route_name='login', renderer='templates/login.pt')
def login(request):
    return {}

@view_config(route_name='site_view', renderer='templates/site_view.pt')
def site_view(request):
    return {}
