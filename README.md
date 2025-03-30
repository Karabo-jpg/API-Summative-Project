# Currency Converter Application

## Overview
The Currency Converter Application allows users to convert between various currencies using real-time exchange rates. The app supports currencies such as USD, EUR, GBP, KES (Kenyan Shilling), UGX (Ugandan Shilling), RWF (Rwandan Franc), and more. It provides an easy-to-use interface, dynamic result display, and is deployed to multiple web servers for high availability.

## Demo Video
You can view the demo video here: [Currency Converter Demo Video](https://youtu.be/I-zMejJM2KA)

## Live Application
You can access the live application here: [Currency Converter Live](http://127.0.0.1:5000)

## Deployment on Web Servers

### 1. **Deploying the Application to Web Servers**
The application has been deployed to two web servers: Web01 and Web02, and it uses a load balancer for distributing traffic. Here's the step-by-step guide on how to deploy it:

#### **Setting up the Environment**
- Make sure both web servers (Web01 and Web02) are running an Ubuntu environment.
- Install Python 3.x, Flask, and the required dependencies (`requests`).
- Clone the repository to both servers:
    ```bash
    git clone https://github.com/karabo-jpg/currency-converter.git
    ```

#### **Configuring the Web Servers**
- Set up the web servers to run the Flask application:
    ```bash
    cd currency-converter
    python app.py
    ```
- Ensure the application is running on both Web01 and Web02 using the appropriate server IP addresses (44.204.28.180 and 34.201.34.73).

#### **Configuring the Load Balancer**
The load balancer should be configured to distribute incoming requests between the two web servers. The setup is as follows:
- **Web01 (Ubuntu)** - IP: 44.204.28.180
- **Web02 (Ubuntu)** - IP: 34.201.34.73
- **Load Balancer (Ubuntu)** - IP: 3.82.110.36

### 2. **Testing the Deployment**
Once deployed, verify the load balancing functionality by accessing the load balancer's IP (`http://3.82.110.36`) and ensuring that it routes traffic correctly between the two web servers.

## Technologies Used
- **Python**: Backend functionality for handling API requests and conversions.
- **Flask**: Web framework for building the application.
- **HTML/CSS/JavaScript**: For the front-end design and functionality.
- **Requests**: For making HTTP requests to the ExchangeRate-API.
- **ExchangeRate-API**: API used to retrieve live exchange rates. [API Documentation](https://www.exchangerate-api.com/docs).

## Challenges Faced & Solutions

### Challenge 1: **Integrating with the API**
- **Problem**: The application had trouble properly formatting the API responses.
- **Solution**: By carefully reviewing the API documentation, I was able to map the correct currency codes and ensure the conversion logic was implemented correctly.
