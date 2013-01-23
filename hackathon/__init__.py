from pyramid.config import Configurator
from pyramid.renderers import *
from pyramid_beaker import session_factory_from_settings


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    settings['db'] = {'host':'localhost', 'port': 27017}
    session_factory = session_factory_from_settings(settings)

    config = Configurator(settings=settings,session_factory=session_factory)

    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_renderer('jsonp', JSONP(param_name = 'callback'))




    config.add_route('home', '/')
    config.add_route('home_jiang', '/home')
    config.add_route('index', '/index')
    config.add_route('preview', '/i/{short_url}')
    config.add_route('img', '/html/img/{filename}')
    config.add_route('test', '/test')
    config.add_route('create', '/create')
    config.add_route('get_info', '/get_info')
    config.add_route('pull', '/pull')
    config.add_route('tencent', '/qq')
    config.add_route('login', '/login')
    config.add_route('site_view', '/site_view')
    config.add_route('register', '/register')
    config.add_route('qqlogin', '/qqlogin')
    config.scan()
    return config.make_wsgi_app()
