
require 'httparty'
require 'pry'


key = "64e90a58d89a8e7f3f000001fe809d0cd55d32cb45b9f117e"
response = HTTParty.get("http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=" + key
)
response = response["word"]
definition = HTTParty.get("http://api.wordnik.com:80/v4/word.json/"+ response + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key="+ key)
definition = definition[0]["text"]
puts response
puts definition


"http://api.wordnik.com:80/v4/word.json/computer/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=64e90a58d89a8e7f3f000001fe809d0cd55d32cb45b9f117e"
