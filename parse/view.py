from pymongo import MongoClient

client = MongoClient()
db = client['RIWordFrequency']
def dummy():
	print """
	city freq>=50, PMI>9
	india freq>=10, PMI>9
	life freq>=30, PMI>=6.2
	world freq>=30 , PMI>6
	business freq>=5 , PMI>9
	"""

dummy()

choice = input("""
1. City
2. Business
3. World
4. Life
5. India
""")

if choice==1:
	WORDS = db.words_cities
if choice==2:
	WORDS = db.words_businesses
if choice==3:
	WORDS = db.words_worlds
if choice==4:
	WORDS = db.words_lives
if choice==5:
	WORDS = db.words_indias


WORDS = WORDS.find()

WORDS = sorted(WORDS , key=lambda wd:wd["frequency"] , reverse=True)

c = 0

for b in WORDS:
	# if b["frequency"] >= 5:
		c += 1
		print "| {} | {} | {} |".format(c,b["word"],b["frequency"])
		if c >= 20:
			break

# cc = 0

# c = 10
# def print10(si):
# 	global cc
# 	global c
# 	for i in range(si,si+10):
# 		if (WORDS[i]["frequency"] >= 5) and (WORDS[i]["PMI"]):
# 			cc += 1
# 			print "first:\"{}\" second:\"{}\" PMI:{} Freq:{}".format(WORDS[i]["first"],WORDS[i]["second"],WORDS[i]["PMI"],WORDS[i]["frequency"])
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
