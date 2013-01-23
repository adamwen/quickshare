import hashlib

def create_sha512(string):
    h = hashlib.sha512()
    h.update(string)
    return h.hexdigest()

