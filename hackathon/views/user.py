from pyramid.view import view_config
from hackathon.models.user import *
from hackathon.util.user import *

@view_config(route_name = 'register', renderer = 'json')
def register(request):
    user_info = {}
    
    user_info['user_name'] = request.GET['user_name']
    user_info['password'] = request.GET['password']
    if 'renren_id' in request.GET:
        user_info['renren_id'] = request.GET['renren_id']
    if 'qq_id' in request.GET:
        user_info['qq_id'] = request.GET['qq_id']

    user = User()
    if user.create(request.db, user_info) == False:
        return{'status': 'fail'}
    return {'status': 'success'}

@view_config(route_name='qqlogin', renderer='json')
def qq_login(request):
    openid = request.GET['openid']

    collection = request.db['user_info']
    info = collection.find_one({'qq_id': openid})

    if info == None:
        return {'status': 'fail'}

    token = login(info['_id'], request)
    request.response.set_cookie('token', token)

    return {'status': 'success', 'id': info['_id'], 'username': info['user_name']}
    

