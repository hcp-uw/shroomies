from keras import models
import keras
import numpy as np
import tensorflow as tf
from PIL import Image
from os.path import dirname, join
current_dir = dirname(__file__)


model_path = join(current_dir, "../mushroom_models/trained_mushroom_model_V3.keras")
# model_path = "../mushroom_models/trainedModel_lite.tflite"
img_path = join(current_dir, "./test_mushroom.png")
img = keras.utils.load_img(img_path)
# img = Image.open(img_path)
img_array = keras.utils.img_to_array(img)
img_array = keras.ops.expand_dims(img_array, 0)  # Create batch axis

in_data = np.asarray(img)

with tf.Graph().as_default():

    with tf.compat.v1.Session() as sess:

        # K.set_session(sess)
        model = models.load_model(model_path)
        preds = model.predict(in_data)
        print(preds)
        print("hi")
        score = float(keras.ops.sigmoid(preds[0][0]))
        print(f"This image is {100 * (1 - score):.2f}% cat and {100 * score:.2f}% dog.")

# plt.imshow(img)