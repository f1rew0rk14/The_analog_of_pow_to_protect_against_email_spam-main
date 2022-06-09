from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from server.InfoRequest import InfoRequest

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/check_hash")
def check_hash(request: InfoRequest):
    print(request.sent_hash)
    if request.zero_count == 0:
        if request.sent_hash[0] == "0":
            return False
        else:
            return True
    else:
        if request.sent_hash[0:request.zero_count] == "0" * request.zero_count and\
                request.sent_hash[request.zero_count] != "0":
            return True
        else:
            return False
