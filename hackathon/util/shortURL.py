from hashlib import md5
import string

def shortURL(url):
    allstring = string.ascii_letters + string.digits

    hash_word = 'darkof'

    urlHash = []

    urlHex = md5(url+hash_word).hexdigest()
    length = len(urlHex)

    for i in range(0, 4):
        hexint = int(urlHex[i*8:(i+2)*8], 16) & 0x3fffffff
            
        outChars = ""
        for j in range(0,6):
            index = hexint & 0x0000003D
            outChars = outChars + allstring[int(index)]
            hexint = hexint >> 5

        urlHash.append(outChars)

    return urlHash

        

def generate_short_url(urlHash, db):
    collection = db['info']
    
    for i in urlHash:
        result = collection.find_one({'short_url': i})

        if result == None:
            return i

