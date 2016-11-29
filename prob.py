from pymongo import MongoClient

client = MongoClient()
db = client['RIWordFrequency']

articles = db.articles.find({ "category":"Business" })
WORDS = db.words_businesses
BIGRAMS = db.bigrams_cities

wrds = WORDS.find()
bigrams = BIGRAMS.find()

c=0
s=0
m=0
for b in bigrams:
	s=s+1
	if (b["PMI"] > 17) :
		c=c+1
	if(b["PMI"]>m):
		m=b["PMI"]
			

print c
print m








