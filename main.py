import uvicorn

if __name__ == "__main__":

    service = "server.app:app"
    uvicorn.run(service, host='127.0.0.1', port=8001)
