from pymongo import MongoClient

client = MongoClient()
db = client['RIWordFrequency']

BIGRAMS = db.bigrams_businesses

bigrams = BIGRAMS.find()

for b in bigrams:
	if b['frequency']<=1:
		BIGRAMS.delete_one({"first":b["first"],"second":b["second"]})

print "Done"