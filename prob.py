from pymongo import MongoClient

client = MongoClient()
db = client['RIWordFrequency']

articles = db.articles.find({ "category":"World" })
WORDS = db.words_worlds
BIGRAMS = db.bigrams_worlds

wrds = WORDS.find()

wrds.save()