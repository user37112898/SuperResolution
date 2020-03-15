import io
from base64 import b64encode,b64decode,decodebytes
import eel
from tkinter import Tk
from tkinter.filedialog import askopenfilename
from SuperResolutionClass import SuperResolution
import numpy as np
from PIL import Image
from io import BytesIO
eel.init('WebApplication')

@eel.expose
def superFunction(b64_string,fileName):
    b64_string += "=" * ((4 - len(b64_string) % 4) % 4) 
    image = b64decode(b64_string)
    lr = Image.open(BytesIO(image))
    print(str(lr))
    lr = np.array(lr)
    superObject = SuperResolution()
    hrImage = superObject.resolve_and_plot(lr,fileName)
    encoded = b64encode(hrImage).decode("ascii")
    return "data:image/png;base64, " + encoded

eel.start('index.html', size=(1000, 600))