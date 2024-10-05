# FungiFind
FungiFind is a mobile application for iOS and Android that allows users to identify if a mushroom is poisonous by taking or uploading a photo of the species through the app. This project was made for the Husky Coding Project RSO at University of Washington, Seattle.

Check out our [Figma design](https://www.figma.com/file/5jvVQx2kV1F6DvpRpBQqyH/FungiFind?type=design&node-id=148%3A2&mode=design&t=xJEhWo4EEEgBctaL-1)!

## Installation / Usage

### Model Set-Up

[Download the model](https://drive.google.com/drive/u/1/folders/1DM6uPu0wTsioXFdnRzWzRy-jyfy72zsM) and save
under /server/mushroom_models

### Client Set-Up

Make sure you have Node.js installed on your computer and Expo Go on you mobile device.

Install dependencies:
```
npm install
```

To run the app, navigate to the client and start:
```
cd client
```
```
npm start
```

### Server Set-Up

Navigate to the server:
```
cd server/src
```

Make sure to install all dependencies.

Set up the virtual environment:
```
virtualenv flask
```
```
cd flask
```
```
source bin/activate
```
```
cd ..
```
```
pip install numpy tensorflow opencv-python pillow
```

Run the server:

```
python3 app.py
```

## Credits
[Paulina Teran](https://github.com/paulitera) - Project Manager and Frontend\
[Connor Sun](https://github.com/connorsun) - Frontend\
[Aarfan Hussain](https://github.com/AHussain101) - Frontend\
[James Parrott](https://github.com/jamesdwa) - Backend Lead\
[Angela Wu](https://github.com/angelawu688) - Backend\
[Alec Situ](https://github.com/Err0r64) - Backend