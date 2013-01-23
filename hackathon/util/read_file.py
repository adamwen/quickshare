from upyun import *

def read_file(path):
    u = UpYun(bucket = 'darkcloud', username = 'wang', password = '1qaz2wsx')
    u.setApiDomain('v0.api.upyun.com')
    return  u.readFile(path)
