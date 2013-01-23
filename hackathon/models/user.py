from time import time
from hackathon.util.genID import *
from hackathon.util.create_sha512 import *

class User(object):

    
    def __init__(self):
        self.public_keys = ['user_name' , 'renren_id', 'qq_id']
        self.private_keys = ['_id', 'password', 'create_time']
        pass

    def create(self, db, info):
        user_dict = {}
        collection = db['user_info'] 
        
        user_dict['_id'] = genID()

        user_name = info['user_name']
        u = list(collection.find({'user_name': user_name}))
        if u != []:
            return False

        user_dict['password'] = create_sha512(info['password'])
        for key in self.public_keys:
            user_dict[key] = info[key]
        user_dict['create_time'] = str(int(time.time()))
        collection.insert(user_dict)
        return True

    def check(self, db, user_name, password):
        
        collection = db['user_info']
        info = collection.find_one()
        
        if info == None:
            return False

        info = dict(info)

        if password != info['password']:
            return False 
        
        return True

    def check_id(self, db, input_id):

        collection = db['user_info']
        renren_info = collection.find_one({'renren_id': input_id}) 
        qq_info = collection.find_one({'qq_id': input_id})
        if renren_info == None and qq_info == None:
            return False

        return True  

        


