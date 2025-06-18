import wave

import pyaudio

# Audio recording parameters
FORMAT = pyaudio.paInt16  # 16-bit integers
CHANNELS = 1  # Mono audio
RATE = 44100  # Sample rate
CHUNK = 1024  # Frames per buffer
RECORD_SECONDS = 5  # Duration of recording
OUTPUT_FILENAME = "recorded_audio.wav"


def record_audio(duration=RECORD_SECONDS, filename=OUTPUT_FILENAME):
    """Records audio from the microphone and saves it to a WAV file."""
    p = pyaudio.PyAudio()

    # Open an input stream
    print("Recording...")
    stream = p.open(
        format=FORMAT,
        channels=CHANNELS,
        rate=RATE,
        input=True,  # This is the key for input!
        frames_per_buffer=CHUNK,
    )

    frames = []

    # Read audio data in chunks
    for i in range(0, int(RATE / CHUNK * duration)):
        data = stream.read(CHUNK)
        frames.append(data)

    print("Finished recording.")

    # Stop and close the stream
    stream.stop_stream()
    stream.close()
    p.terminate()

    # Save the recorded data to a WAV file
    wf = wave.open(filename, "wb")
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b"".join(frames))  # Join all the binary data chunks
    wf.close()
    print(f"Audio saved to '{filename}'")


# Call the function to record
record_audio()
