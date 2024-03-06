from datetime import date

class Celldata:
    object: str
    color: str
    pointer: str
    content: str

class Layerdata:
    projectCode: str
    layerName: str
    layerIndex: int
    layerNumber: str
    stt: date
    end: date
    iss: str
    isc: str
    body: list