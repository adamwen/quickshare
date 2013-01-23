import random
import time

def genID():
    randpart = long(random.random() * 10000)
    timepart = long(time.time() * 1000)
    finalvalue = timepart * 10000 + randpart
    return str(finalvalue)
