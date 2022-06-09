from pydantic import BaseModel


class InfoRequest(BaseModel):
    sent_hash: str
    zero_count: int
