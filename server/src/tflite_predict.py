
import numpy as np
import tensorflow as tf
import cv2
from os.path import dirname, join
import json
current_dir = dirname(__file__)

output_path = join(current_dir, "./")

model_path = join(current_dir, "../mushroom_models/trainedModel_lite.tflite")

# Load TFLite model and allocate tensors.
interpreter = tf.lite.Interpreter(model_path=model_path)
interpreter.allocate_tensors()

# Get input and output tensors.
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()


img_path = join(current_dir, "./test_mushroom.png")
img = cv2.imread(img_path)

input_shape = input_details[0]['shape'][1:3]
resized_image = cv2.resize(img, input_shape)

normalized_image = resized_image / 255.

input_data = np.expand_dims(normalized_image, axis=0)
# Test model on random input data.
# input_data = np.asarray(img)
input_data = np.float32(input_data)

interpreter.set_tensor(input_details[0]['index'], input_data)

interpreter.invoke()

# The function `get_tensor()` returns a copy of the tensor data.
# Use `tensor()` in order to get a pointer to the tensor.
output_data = interpreter.get_tensor(output_details[0]['index'])
with open(output_path + "/model_output.json", "w") as f:
    json.dump({'output': float(output_data[0][0])}, f)