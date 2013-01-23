from pyramid.events import NewRequest
from pyramid.events import subscriber
from pyramid.events import ApplicationCreated
import pymongo


@subscriber(NewRequest)
def new_request_subscriber(event):
    import sys
    reload(sys)

    sys.setdefaultencoding('utf-8')
    
    request = event.request
    settings = request.registry.settings

    request.dbconnect = pymongo.Connection(settings['db']['host'], settings['db']['port'])

    request.db = request.dbconnect['kuaixiang']

    
    request.add_finished_callback(close_db_connection)



def close_db_connection(request):
    request.dbconnect.close()
