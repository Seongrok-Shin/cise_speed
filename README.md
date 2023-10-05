# cise_speed
CISE Project - Creating Software Practice Empirical Evidence Database which is called SPEED.

# API endpoints

 - /article/upload

 accepts a JSON object as such:

 ```json
 {
    "title": "SDP 2",
    "authors": [
        "John Doe",
        "Jane Doe"
    ],
    "journal": "AUT",
    "year": 2022,
    "volume": 2,
    "pages": 185,
    "DOI": "10.1093/ajae/aaq063",
    "claim": "Agile is better than waterfall",
    "result": true,
    "research": "case study",
    "participant": "student"
 }
 ```

 The status property will automatically be set to 'under_review'.

 upon successfull submission, returns a json object as such:

 ```json
 {
    "message": "Article has successfully been created!",
    "newArticle": {} // returns the object just uploaded
}
 ```

upon unsuccessfull submission, returns a json object as such:

 ```json
 {
    "message": [], // message showing errors with input
    "error": "Bad Request",
    "statusCode": 400
}
```
