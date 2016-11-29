from pymongo import MongoClient

client = MongoClient()
db = client['RIWordFrequency']

choice = input("""
1. City
2. Business
3. World
4. Life
5. India
""")

if choice==1:
	BIGRAMS = db.bigrams_cities
if choice==2:
	BIGRAMS = db.bigrams_businesses
if choice==3:
	BIGRAMS = db.bigrams_worlds
if choice==4:
	BIGRAMS = db.bigrams_lives
if choice==5:
	BIGRAMS = db.bigrams_indias

def dummy():
	print """
	city freq>=50, PMI>9
	india freq>=10, PMI>9
	life freq>=30, PMI>=6.2
	world freq>=30 , PMI>6
	business freq>=5 , PMI>9
	"""

bigrams = BIGRAMS.find()

bigrams = sorted(bigrams , key=lambda wd:wd["PMI"] , reverse=True)

c = 0

for b in bigrams:
	if b["frequency"] >= 5:
		# c += 1
		print "first:\"{}\" second:\"{}\" PMI:{} Freq:{}".format(b["first"],b["second"],b["PMI"],b["frequency"])
	# if c > 100:
		# break

# cc = 0

# c = 10
# def print10(si):
# 	global cc
# 	global c
# 	for i in range(si,si+10):
# 		if (bigrams[i]["frequency"] >= 5) and (bigrams[i]["PMI"]):
# 			cc += 1
# 			print "first:\"{}\" second:\"{}\" PMI:{} Freq:{}".format(bigrams[i]["first"],bigrams[i]["second"],bigrams[i]["PMI"],bigrams[i]["frequency"])
# 	if cc < 10:
# 		c += 10
# 		if c < 40929:
# 			print10(c)
# 	else:
# 		cc = 0


# print10(0)


# while raw_input("")!="end":
# 	print10(c)
# 	c += 10
