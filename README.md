# FitCheckV1 - Team 0311

## Release Notes

## Install Guide

### Frontend
1. Navigate to the client directory by running `cd client`
2. If needed, run `npm install`
3. From here, run `npm start` and the app should be running on http://localhost:3000

### Backend
1. In a separate terminal, navigate to the server directory by running `cd server`
2. If needed, run `npm install`
3. From here, run `node index.js` and the server should start on port 5000 and be connected to MongoDB

### AI

#### First Time Setup
1. NOTE: This installation process requires Conda installed on your machine. If you do not have this requirement, install Conda before proceeding
2. Download the dependencies.zip file provided separately (this may take some time) and place the extracted folder into the AI folder
3. Next, navigate into the AI folder by running `cd AI`
4. Now, run `conda create --name fitcheck`
5. Then, run `conda activate fitcheck` (or `source activate fitcheck`) to enter the virtual env
6. Now, you must install pytorch by running `conda install pytorch torchvision torchaudio -c pytorch`
7. After this, navigate to mmfashion by running `cd mmfashion`
8. Next, run `python setup.py install`
9. We also need flask installed, and to do this, you need to run `pip install flask`
10. Finally, to start the AI server, run `python app.py`

#### Run Each Time
1. `conda activate fitcheck`
2. `python app.py`

## Troubleshooting

