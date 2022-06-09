# The analog of POW to protect from email spam

## Short description
POW (Proof-of-work — proof of work) is a system for protecting systems from DoS attacks or abuse of services.

Program Parameters:
1) Nonce
2) Zero_count

Brief description of the program:
1) The client writes a message and clicks Send 
2) Then the hash from the written message is calculated on the client side during the Nonce
3) The client checks each hash for the number of Zero_count
4) If the check is passed, then using the Rest API, the client sends this hash to the server 
5) The server checks the client's hash for the amount of Zero_count 
6) If everything is correct, the server returns 200 to the client
7) Email sent

## Program interface:
![image](https://user-images.githubusercontent.com/58793385/164896435-12f78a44-99d3-4440-9be8-b24edd1553d0.png)
![image](https://user-images.githubusercontent.com/58793385/164896444-14b53daf-56f0-4159-a46b-edfb01c364d5.png)

## Swagger:
![image](https://user-images.githubusercontent.com/58793385/164896455-03ce4a2b-9b43-4675-82fc-ed8f50f5d62e.png)
![image](https://user-images.githubusercontent.com/58793385/164896460-e5930f03-e5af-472a-8c6a-8923d110b2ea.png)
![image](https://user-images.githubusercontent.com/58793385/164896469-38b532aa-9acd-4523-b640-0ddd9b889c6a.png)


## Install dependencies
`pip install -r requirements.txt`

## Using the program

Setting up parameters:
1) Parameters.js

Start:
1) Run main.py (server)
2) Run site.html (client)


## Documentation
Using swagger for documentation generation `https://127.0.0.1:8001/docs`
