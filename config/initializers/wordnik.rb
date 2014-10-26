Wordnik.configure do |config|
  config.api_key = '64e90a58d89a8e7f3f000001fe809d0cd55d32cb45b9f117e'               # required
  config.username = 'AndrewFritz86'                    # optional, but needed for user-related functions
  config.password = 'andypage'               # optional, but needed for user-related functions
  config.response_format = 'json'             # defaults to json, but xml is also supported
  config.logger = Logger.new('/dev/null')     # defaults to Rails.logger or Logger.new(STDOUT). Set to Logger.new('/dev/null') to disable logging.
end
