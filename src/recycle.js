import React, { useState, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import img2 from "./assets/galaxy.jpg";

const ImageClassifier = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Load the pre-trained model when the component mounts
    async function loadModel() {
      try {
        const loadedModel = await tf.loadLayersModel("../public/model.json"); // Replace with the actual path to your model.json file
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    }
    loadModel();
  }, []);

  const classifyImage = async () => {
    if (model) {
      try {
        const imageElement = document.createElement('img');
        imageElement.src = img2;
        await imageElement.decode(); // Ensure the image is loaded

        const tfImage = tf.browser.fromPixels(imageElement);
        const resizedImage = tf.image.resizeBilinear(tfImage, [224, 224]);
        const normalizedImage = resizedImage.toFloat().div(tf.scalar(255.0)); // Normalize to [0, 1]

        // Reshape the image to match the model's input shape if necessary
        // You might need to adjust this based on your model's input shape
        const reshapedImage = normalizedImage.reshape([1, 224, 224, 3]);

        // Perform image classification
        const predictions = model.predict(reshapedImage);

        // Handle the predictions as needed
        console.log(predictions);
      } catch (error) {
        console.error("Error classifying image:", error);
      }
    }
  };

  useEffect(() => {
    classifyImage(); // Classify the image when the component mounts
  }, [model]);

  return (
    <div>
      {/* Add your image input and classification button here */}
    </div>
  );
};

export default ImageClassifier;
