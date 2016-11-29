# Bigram Analysis

>Source of articles: [Times of India Archives](http://timesofindia.indiatimes.com/archive.cms)
> Start Date: 1st January, 2016
> End Date: 31st January, 2016

#### Procedure followed
* Downloaded articles from Times of India archives
* Tokenized the articles
* Stored all the words and pair of consecutive words for each category
* Calculated [Pointwise Mutual Information (PMI)](https://en.wikipedia.org/wiki/Pointwise_mutual_information) for all pairs of consecutive words

#### Technologies used
* [NodeJS](https://nodejs.org/): for downloading articles and calculating PMI
* [Python](https://www.python.org/): for tokenizing and storing the words and the pair of consecutive words
* [MongoDB](https://www.mongodb.com/): database used to store data

#### Formula for PMI
```
Porbability of finding the word W:
P(W) = count(W)/(sum of all frequencies of words)

Porbability of finding the bigram (Wi,Wi-1):
P(Wi,Wi-1) = count(Wi,Wi-1)/(sum of all frequencies of consecutive words)

PMI:
PMI(Wi,Wi-1) = log( P(Wi,Wi-1)/( P(Wi)P(Wi-1) ) )
```


## Analysis details

| Category  | Number of articles |
|:---:|:---:|
| City  | 11,137 |
| India  | 1,157 |
| Life  | 932 |
| World  | 563 |
| Business  | 464 |

## City
> Filters for the table
> Min PMI: 9
> Min frequency: 50

| S. No. | First Word | Second Word | PMI |
|:---:|:---|:---|:---:|
| 1 | modus | operandi | 11.7213206228 |
| 2 | prima | facie | 11.4713857946 |
| 3 | saudi | arabia | 11.3766874548 |
| 4 | wi | fi | 11.3463508157 |
| 5 | smriti | irani | 11.3285651023 |
| 6 | aam | aadmi | 11.1529102368 |
| 7 | bullock | cart | 11.0430850649 |
| 8 | bone | marrow | 10.9561999426 |
| 9 | jawaharlal | nehru | 10.8396123643 |
| 10 | bharatiya | janata | 10.7816950518 |
| 11 | swine | flu | 10.6364698871 |
| 12 | sri | lanka | 10.5937590681 |
| 13 | oommen | chandy | 10.4838689798 |
| 14 | makar | sankranti | 10.4699667006 |
| 15 | chandrababu | naidu | 10.4163867819 |
| 16 | pimpri | chinchwad | 10.407674075 |
| 17 | jd | u | 10.3519598742 |
| 18 | mamata | banerjee | 10.315714659 |
| 19 | mehbooba | mufti | 10.277039004 |
| 20 | naveen | patnaik | 10.2601010416 |
| 21 | devendra | fadnavis | 10.1470411295 |
| 22 | penal | code | 10.1022523413 |
| 23 | swachh | bharat | 10.0862227694 |
| 24 | freedom | fighter | 10.0715782626 |
| 25 | slum | dweller | 10.0346809663 |
| 26 | rajya | sabha | 10.0135919024 |
| 27 | shiv | sena | 9.98204036052 |
| 28 | lok | sabha | 9.85669773661 |
| 29 | rohith | vemula | 9.82734776872 |
| 30 | sq | ft | 9.65691695845 |
| 31 | western | disturbance | 9.62119887584 |
| 32 | story | offline | 9.61290007303 |
| 33 | arvind | kejriwal | 9.59358655315 |
| 34 | chinese | manjha | 9.58006914167 |
| 35 | dense | fog | 9.55512140215 |
| 36 | birth | anniversary | 9.53373574166 |
| 37 | renewable | energy | 9.49758491988 |
| 38 | tribunal | ngt | 9.48407414561 |
| 39 | mahatma | gandhi | 9.47669241059 |
| 40 | tamil | nadu | 9.47395796594 |
| 41 | manohar | lal | 9.42057418806 |
| 42 | cctv | footage | 9.41367373542 |
| 43 | appa | rao | 9.3603676822 |
| 44 | vice | chancellor | 9.30483453758 |
| 45 | j | jayalalithaa | 9.294505658 |
| 46 | cold | wave | 9.27887526961 |
| 47 | writ | petition | 9.23467847519 |
| 48 | sim | card | 9.20130705728 |
| 49 | real | estate | 9.19933721502 |
| 50 | boundary | wall | 9.14238923128 |
| 51 | square | yard | 9.14228626643 |
| 52 | stray | dog | 9.13545293647 |
| 53 | narendra | modis | 9.10863328064 |
| 54 | ration | card | 9.08130426489 |
| 55 | cctv | camera | 9.04421768837 |
| 56 | indira | gandhi | 9.04075041169 |
| 57 | animal | husbandry | 9.03848067869 |

## India
> Filters for the table
> Min PMI: 9
> Min frequency: 10

| S. No. | First Word | Second Word | PMI |
|:---:|:---|:---|:---:|
| 1 | wi | fi | 10.5464479734 |
| 2 | saudi | arabia | 10.2781839868 |
| 3 | barack | obama | 10.2781839868 |
| 4 | lone | wolf | 10.1156650574 |
| 5 | aam | aadmi | 10.1032425374 |
| 6 | dipak | misra | 10.0716481719 |
| 7 | ghulam | nabi | 10.0668748932 |
| 8 | ardh | kumbh | 9.96906158316 |
| 9 | bullock | cart | 9.8155604649 |
| 10 | nobel | laureate | 9.81271551277 |
| 11 | nicobar | island | 9.79721132623 |
| 12 | mukul | rohatgi | 9.78570750175 |
| 13 | shafi | armar | 9.78174710054 |
| 14 | sitaram | yechury | 9.74410150092 |
| 15 | terminally | ill | 9.71019994924 |
| 16 | swami | vivekananda | 9.64850638024 |
| 17 | sri | lanka | 9.62631846526 |
| 18 | vikas | swarup | 9.59687126394 |
| 19 | col | niranjan | 9.58503680629 |
| 20 | bharatiya | janata | 9.53484706177 |
| 21 | jawaharlal | nehru | 9.52325944659 |
| 22 | kapil | sibal | 9.52049828515 |
| 23 | passive | euthanasia | 9.48705639793 |
| 24 | jet | airway | 9.47381117118 |
| 25 | suresh | prabhu | 9.44527486391 |
| 26 | madan | gopal | 9.35352500531 |
| 27 | environmental | clearance | 9.34840990464 |
| 28 | swachh | bharat | 9.34387474947 |
| 29 | mamata | banerjee | 9.33372237801 |
| 30 | arab | league | 9.3167728197 |
| 31 | maulana | masood | 9.2634918826 |
| 32 | lie | detector | 9.20667362796 |
| 33 | nitin | gadkari | 9.19178415621 |
| 34 | oommen | chandy | 9.17957169818 |
| 35 | sexual | harassment | 9.17370657873 |
| 36 | cook | madan | 9.1616339975 |
| 37 | venkaiah | naidu | 9.14530710421 |
| 38 | jd | u | 9.14110541735 |
| 39 | sushma | swaraj | 9.13615246023 |
| 40 | ford | foundation | 9.07314223533 |
| 41 | nabam | tuki | 9.0266222197 |
| 42 | masood | azhar | 9.00052346673 |


## Life
> Filters for the table
> Min PMI: 6.2
> Min frequency: 30

| S. No. | First Word | Second Word | PMI |
|:---:|:---|:---|:---:|
| 1 | omega | fatty | 8.5011348022 |
| 2 | bone | marrow | 8.37983769427 |
| 3 | fatty | acid | 7.91308267406 |
| 4 | olive | oil | 7.44508489956 |
| 5 | zika | virus | 7.40414370065 |
| 6 | social | medium | 7.16376448301 |
| 7 | daily | mirror | 7.11796304543 |
| 8 | basmati | rice | 7.1105199685 |
| 9 | lucky | colour | 6.97737047391 |
| 10 | brown | rice | 6.76695743765 |
| 11 | dr | jenkins | 6.74013769523 |
| 12 | heart | attack | 6.68818248682 |
| 13 | vitamin | d | 6.68288877956 |
| 14 | home | remedy | 6.57368948759 |
| 15 | blood | circulation | 6.53488858172 |
| 16 | blood | pressure | 6.44708361688 |
| 17 | calorie | intake | 6.42324313933 |
| 18 | vitamin | c | 6.39648303147 |
| 19 | weight | gain | 6.38064864581 |
| 20 | green | tea | 6.37751089614 |
| 21 | weight | loss | 6.31957897201 |
| 22 | long | term | 6.23001168524 |
| 23 | junk | food | 6.22652630403 |

## World
> Filters for the table
> Min PMI: 6
> Min frequency: 30

| S. No. | First Word | Second Word | PMI |
|:---:|:---|:---|:---:|
| 1 | hong | kong | 8.9180177005 |
| 2 | asylum | seeker | 8.81536354644 |
| 3 | hydrogen | bomb | 7.41194030306 |
| 4 | u | s | 7.38527538377 |
| 5 | middle | east | 7.35124623439 |
| 6 | prime | minister | 7.12776086116 |
| 7 | hillary | clinton | 7.08991897724 |
| 8 | john | kerry | 7.07542914508 |
| 9 | saudi | arabia | 6.99554612442 |
| 10 | fox | news | 6.97904069504 |
| 11 | al | qaida | 6.96421357259 |
| 12 | barack | obama | 6.93137535175 |
| 13 | human | right | 6.91838704387 |
| 14 | air | strike | 6.69306955269 |
| 15 | white | house | 6.68147729679 |
| 16 | zika | virus | 6.57283920988 |
| 17 | news | agency | 6.55176922788 |
| 18 | social | medium | 6.55045826157 |
| 19 | told | reuters | 6.41482532057 |
| 20 | told | afp | 6.40556599516 |
| 21 | security | council | 6.34536844041 |
| 22 | donald | trump | 6.32474221568 |
| 23 | told | reporter | 6.32218438622 |
| 24 | president | barack | 6.31624602055 |
| 25 | foreign | ministry | 6.29983306857 |
| 26 | south | carolina | 6.2739762192 |
| 27 | presidential | candidate | 6.17282795245 |
| 28 | new | hampshire | 6.08162975061 |
| 29 | new | york | 6.06889072483 |

## Business
> Filters for the table
> Min PMI: 9
> Min frequency: 5

| S. No. | First Word | Second Word | PMI |
|:---:|:---|:---|:---:|
| 1 | hero | motocorp | 10.6154302511 |
| 2 | san | francisco | 10.6154302511 |
| 3 | mscis | broadest | 10.4331086943 |
| 4 | gen | ze | 10.4331086943 |
| 5 | grama | panchayat | 10.4331086943 |
| 6 | thomas | cook | 10.2789580145 |
| 7 | jio | infocomm | 10.1454266219 |
| 8 | silicon | valley | 10.1454266219 |
| 9 | texas | intermediate | 10.1248073347 |
| 10 | sukanya | samriddhi | 10.0276435862 |
| 11 | tamil | nadu | 9.92228307058 |
| 12 | rajya | sabha | 9.92228307058 |
| 13 | nirmala | sitharaman | 9.92228307058 |
| 14 | coca | cola | 9.82697289077 |
| 15 | circuit | breaker | 9.82697289077 |
| 16 | narayana | hrudayalaya | 9.73996151378 |
| 17 | saudi | arabia | 9.58581083396 |
| 18 | arundhati | bhattacharya | 9.58581083396 |
| 19 | viral | shot | 9.58581083396 |
| 20 | l | ampt | 9.56460862631 |
| 21 | germany | dax | 9.55763995699 |
| 22 | sq | ft | 9.51681796247 |
| 23 | patanjali | ayurved | 9.51681796247 |
| 24 | infinite | analytics | 9.49050065415 |
| 25 | losing | streak | 9.33449640568 |
| 26 | blue | chip | 9.26649167656 |
| 27 | hang | seng | 9.22913589002 |
| 28 | raw | material | 9.22913589002 |
| 29 | jan | dhan | 9.22913589002 |
| 30 | angel | broking | 9.22913589002 |
| 31 | morgan | stanley | 9.18034572585 |
| 32 | jp | morgan | 9.18034572585 |
| 33 | intermediate | wti | 9.18034572585 |
| 34 | somnath | temple | 9.15217484888 |
| 35 | dedicated | freight | 9.14909318234 |
| 36 | app | click | 9.14689779178 |
| 37 | mercedes | benz | 9.13382571021 |
| 38 | dual | mode | 9.13382571021 |
| 39 | bharti | airtel | 9.12092230538 |
| 40 | poll | conducted | 9.11580720471 |
| 41 | aditya | birla | 9.11135285436 |
| 42 | kongs | hang | 9.09560449739 |
| 43 | shree | cement | 9.08937394764 |
| 44 | sun | pharma | 9.07498521019 |
| 45 | generic | medicine | 9.07498521019 |
| 46 | latin | america | 9.05518258289 |
| 47 | dhan | yojana | 9.04681433322 |
| 48 | freight | corridor | 9.03131014669 |
| 49 | electrified | route | 9.0059923387 |

