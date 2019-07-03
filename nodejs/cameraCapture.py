import picamera

camera = picamera.PiCamera()
camera.capture('/tmp/image.jpg')