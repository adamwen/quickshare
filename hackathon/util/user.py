

def login(user_id, request):

    request.session['token'] = request.session.get_csrf_token()

    request.session['user_id'] = user_id

    return request.session['token']

def logout(request):
    print '-' * 50
    print request.session
    request.session['user'] = 'wen'
    
    print '-' * 50
    print request.session

    
def get_user(request):
    if 'user_id' not in request.session:
        return None

    if 'token' not in request.session:
        request.session['token'] = request.session.new_csrf_token()
        return None

    if request.session['token'] == request.cookies['token']: 
        return request.session['user_id']
    else:
        return None



        
        
