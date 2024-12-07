package com.trafficcameraapp

import android.content.res.AssetManager
import com.facebook.react.bridge.*
import org.tensorflow.lite.Interpreter
import java.io.FileInputStream
import java.nio.MappedByteBuffer
import java.nio.channels.FileChannel

class TFLiteModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var tflite: Interpreter? = null

    init {
        try {
            // Load the model file from assets
            val model = loadModelFile(reactContext.assets, "model.tflite")
            tflite = Interpreter(model)
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    override fun getName(): String {
        return "TFLiteModule"
    }

    // Load TensorFlow Lite model from assets
    private fun loadModelFile(assetManager: AssetManager, modelPath: String): MappedByteBuffer {
        val fileDescriptor = assetManager.openFd(modelPath)
        val inputStream = FileInputStream(fileDescriptor.fileDescriptor)
        val fileChannel = inputStream.channel
        return fileChannel.map(
            FileChannel.MapMode.READ_ONLY,
            fileDescriptor.startOffset,
            fileDescriptor.declaredLength
        )
    }

    @ReactMethod
    fun runModelOnImage(imagePath: String, promise: Promise) {
        try {

            val input = FloatArray(224 * 224)
            val output = FloatArray(1001)

            tflite?.run(input, output) // Run inference
            promise.resolve(output.toList()) // Return the results to React Native
        } catch (e: Exception) {
            promise.reject("TFLiteError", e)
        }
    }
}
