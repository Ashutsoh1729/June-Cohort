"""Pyaudio Example: Play a wave file"""

import os

# import sys
import wave

import kagglehub
import pyaudio

CHUNK = 1024

# Download latest version
path = kagglehub.dataset_download("crischir/sample-wav-audio-files")

# print("Path to dataset files:", path)

file_list = os.listdir(path)

with wave.open(os.path.join(path, file_list[3]), "rb") as wf:
    # Instantiate PyAudio and initialize PortAudio system resources (1)
    p = pyaudio.PyAudio()

    # Open stream (2)
    stream = p.open(
        format=p.get_format_from_width(wf.getsampwidth()),
        channels=wf.getnchannels(),
        rate=wf.getframerate(),
        output=True,
    )

    # Play samples from the wave file (3)
    while len(data := wf.readframes(CHUNK)):  # Requires Python 3.8+ for :=
        stream.write(data)

    # Close stream (4)
    stream.close()

    # Release PortAudio system resources (5)
    p.terminate()
