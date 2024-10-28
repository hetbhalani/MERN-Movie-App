from flask import Flask, jsonify
import speech_recognition as sr
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/voice-to-text', methods=['GET'])
def voice_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        audio = recognizer.listen(source)
    
        try:
            text = recognizer.recognize_google(audio)
            print("You said:", text)
            return jsonify({"text": text})
        except:
            print("error")

if __name__ == '__main__':
    app.run(port=5001) 
    