from hackathon.util.shortURL import generate_short_url

class Info(object):
    
    def __init__(self, urlHash, filename, url, post_fix, width, height, size, db):
        self.db = db
        self.filename = filename
        self.url = url
        self.post_fix = post_fix
        self.width = width
        self.height = height
        self.size = size

        self.short_url = generate_short_url(urlHash, self.db) 

        self.save()


    def save(self):
        info_dict = {}
        info_dict['short_url'] = self.short_url
        info_dict['url'] = self.url
        info_dict['post_fix'] = self.post_fix
        info_dict['width'] = self.width
        info_dict['height'] = self.height
        info_dict['size'] = self.size
        info_dict['filename'] = self.filename

    
        collection = self.db['info']

        collection.insert(info_dict, safe=True)


        
    @staticmethod
    def out(db, short_url):
        collection = db['info']

        result = collection.find_one({'short_url':short_url})

        return result
    
    
