from PIL import Image
import os
import numpy as np

CWD_PATH = os.getcwd()
PATH_TO_PROCESS = os.path.join(CWD_PATH,'ImageToBeProcessed')
for filename in os.listdir(PATH_TO_PROCESS):
    image = Image.open(os.path.join(PATH_TO_PROCESS,filename))
    image = image.resize((140,160),Image.ANTIALIAS)
    image.save(os.path.join(CWD_PATH,'LowQuality',filename),quality=25)