import base64

def filter_file(request):
    filestring = request.POST['file'].split(';')

    filename = filestring[0][9:]

    file_stream = base64.b64decode(filestring[1].split(',')[1])


    file_dict = {}
    file_dict['filename'] = filename
    file_dict['stream'] = file_stream
    return file_dict

