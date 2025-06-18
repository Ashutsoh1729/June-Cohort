import sys
import wave

import pyaudio

CHUNK = 1024
# Define the WAV file
WAVE_FILE = (
    "sample.wav"  # Make sure you have a WAV file named sample.wav in the same directory
)


def create_dummy_wav():
    # Create a dummy WAV file for demonstration if it doesn't exist
    try:
        with wave.open(WAVE_FILE, "wb") as wf:
            wf.setnchannels(1)  # Mono
            wf.setsampwidth(2)  # 16-bit
            wf.setframerate(44100)  # 44.1 kHz
            # Generate a simple sine wave to put in the WAV file
            import numpy as np

            frequency = 440  # A4 note
            duration = 2  # seconds
            sampling_rate = 44100
            t = np.linspace(0, duration, int(sampling_rate * duration), endpoint=False)
            amplitude = np.iinfo(np.int16).max * 0.5  # Half of max 16-bit amplitude
            data = amplitude * np.sin(2 * np.pi * frequency * t)
            wf.writeframes(data.astype(np.int16).tobytes())
        print(f"Created a dummy WAV file: {WAVE_FILE}")
    except Exception as e:
        print(
            f"Could not create dummy WAV file (it might already exist or there's another issue): {e}"
        )


def play_wav_file(filename):
    """Plays a WAV file using PyAudio."""
    try:
        wf = wave.open(filename, "rb")
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
        return
    except wave.Error as e:
        print(f"Error opening WAV file: {e}. Is it a valid WAV file?")
        return

    # Instantiate PyAudio
    p = pyaudio.PyAudio()

    # Open a stream to play audio
    stream = p.open(
        format=p.get_format_from_width(wf.getsampwidth()),
        channels=wf.getnchannels(),
        rate=wf.getframerate(),
        output=True,
    )

    # Read data in chunks and play it
    print(f"Playing '{filename}'...")
    data = wf.readframes(CHUNK)
    while data:
        stream.write(data)
        data = wf.readframes(CHUNK)

    print("Finished playing.")

    # Stop and close the stream
    stream.stop_stream()
    stream.close()

    # Terminate the PyAudio session
    p.terminate()


# Call the function to play the created WAV file
play_wav_file("recorded_audio.wav")
