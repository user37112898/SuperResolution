import os
import matplotlib.pyplot as plt

from model.srgan import generator
from model import resolve_single
from PIL import Image
import numpy as np
from base64 import b64encode
import os

class SuperResolution:
    def __init__(self):
        self.gan_generator = generator()
        self.CWD_PATH = os.getcwd()
        self.gan_generator.load_weights(os.path.join(self.CWD_PATH,'weights','srgan','gan_generator.h5'))
    
    def resolve_and_plot(self,lr,fileName):
        gan_sr = resolve_single(self.gan_generator, lr)
        plt.imshow(gan_sr,interpolation='nearest')
        plt.axis('off')
        print('File name si ----------',fileName)
        plt.savefig(os.path.join(self.CWD_PATH,'demo','HighQuality',fileName), dpi=None, facecolor='w', edgecolor='w',
            orientation='portrait', papertype='legal', format=None,
            transparent=False, bbox_inches='tight', pad_inches=0.0,
            frameon=None, metadata=None)
        gan_sr = open(os.path.join(self.CWD_PATH,'demo','HighQuality',fileName), "rb")
        return gan_sr.read()