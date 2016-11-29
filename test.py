from pymongo import MongoClient

import re
from nltk import WordNetLemmatizer
from nltk.corpus import stopwords
stop = set(["a","about","above","across","after","afterwards","again","against","all","almost","alone","along","already","also","although","always","am","among","amongst","amoungst","amount","an","and","another","any","anyhow","anyone","anything","anyway","anywhere","are","around","as","at","back","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","below","beside","besides","between","beyond","bill","both","bottom","but","by","call","can","cannot","cant","co","con","could","couldnt","cry","de","describe","detail","do","done","down","due","during","each","eg","eight","either","eleven","else","elsewhere","empty","enough","etc","even","ever","every","everyone","everything","everywhere","except","few","fifteen","fify","fill","find","fire","first","five","for","former","formerly","forty","found","four","from","front","full","further","get","give","go","had","has","hasnt","have","he","hence","her","here","hereafter","hereby","herein","hereupon","hers","herself","him","himself","his","how","however","hundred","ie","if","in","inc","indeed","interest","into","is","it","its","itself","keep","last","latter","latterly","least","less","ltd","made","many","may","me","meanwhile","might","mill","mine","more","moreover","most","mostly","move","much","must","my","myself","name","namely","neither","never","nevertheless","next","nine","no","nobody","none","noone","nor","not","nothing","now","nowhere","of","off","often","on","once","one","only","onto","or","other","others","otherwise","our","ours","ourselves","out","over","own","part","per","perhaps","please","put","rather","re","same","see","seem","seemed","seeming","seems","serious","several","she","should","show","side","since","sincere","six","sixty","so","some","somehow","someone","something","sometime","sometimes","somewhere","still","such","system","take","ten","than","that","the","their","them","themselves","then","thence","there","thereafter","thereby","therefore","therein","thereupon","these","they","thickv","thin","third","this","those","though","three","through","throughout","thru","thus","to","together","too","top","toward","towards","twelve","twenty","two","un","under","until","up","upon","us","very","via","was","we","well","were","what","whatever","when","whence","whenever","where","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","whoever","whole","whom","whose","why","will","with","within","without","would","yet","you","your","yours","yourself","yourselves","i"])

lemmatizer = WordNetLemmatizer()

def tokenize(sentence):
    """ Returns an array with all the words in the sentence """
    s = sentence.lower()

    # comment out the any of the following 4 lines according to the need
    s = re.compile("\t").sub(" ",s) # replacing tab space with single space
    s = re.compile("[-_(),&.]").sub(" ",s) # removing special characters - _ ( ) , & .
    s = re.compile("[^A-Za-z ]").sub("",s) # removing non alphabets
    s = re.compile("\s\s+").sub(" ",s) # replacing multiple spaces with single space

    s = s.split()
    return s
# end tokenize

wordDictionary = None
bigramDictionary = None

def withoutStopwords(words):
    global wordDictionary
    global bigramDictionary
    wordDictionary = {}
    bigramDictionary = {}
    length = len(words)-1

    # words = [ lemmatizer.lemmatize(wrd) for wrd in words if wrd not in stop ]

    for i in range(len(words)):

        wrd = words[i]
        if not wrd in stop:

            wrd = lemmatizer.lemmatize(wrd)

            if not wrd in wordDictionary:
                wordDictionary[wrd] = 0
            # end if

            wordDictionary[wrd] += 1

            if (i<length) and (words[i+1] not in stop):
                SW = lemmatizer.lemmatize(words[i+1])

                if wrd not in bigramDictionary:
                    bigramDictionary[wrd] = {}

                if SW not in bigramDictionary[wrd]:
                    bigramDictionary[wrd][SW] = 0

                bigramDictionary[wrd][SW] += 1

        # end if



    # end for
    # return wordDictionary

client = MongoClient()
db = client['RIWordFrequency']

articles = db.articles.find({ "category":"City" })

words = []

for a in articles:
    if "subse" in tokenize( a['text'] ):
        print a
        break