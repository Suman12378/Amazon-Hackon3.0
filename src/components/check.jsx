import React, { useEffect, useState } from 'react'
import * as tf from '@tensorflow/tfjs';
import img from "../assets/macbook.jpg";


const Check = () => {

  console.log("i am check");
  const [model, setModel] = useState(null);
      

   
        
        // Load the pre-trained model when the component mounts
        useEffect(() => {
          async function loadModel() { 
            const loadedModel = await tf.loadLayersModel("../../public/model.json"); // Replace with the actual path to your model.json file
            setModel(loadedModel);
          }
          loadModel();
        }, []);

      

      const preprocessImage = async (imageElement) => {
        const tfImage = tf.browser.fromPixels(imageElement); // Convert the image to a tensor
        const resizedImage = tf.image.resizeBilinear(tfImage, [224, 224]); // Resize to model input size
        const normalizedImage = resizedImage.div(255.0); // Normalize to [0, 1]
        return normalizedImage;
      };

      const classifyImage = async (imageData) => {
        if (model) {
          // Preprocess the image data (e.g., resizing, normalizing) before prediction
          // Make sure imageData is in a format that the model expects
    
          // Perform image classification
          const predictions = model.predict(imageData);
    
          // Handle the predictions as needed
          console.log(predictions);
        }
      };

  const img2 = preprocessImage(img);
  classifyImage(img2);
  


    }


export default Check