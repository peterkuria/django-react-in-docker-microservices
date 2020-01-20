import 'base64'
//use moment to format the date
//from datetime import datetime
//import requests
//from requests_auth  import HTTPBasicAuth
//import keys
//
//# print(datetime.now())
//data_to_encode = keys.business_shortCode + keys.lipa_na_mpesa_passkey + formatted_time
//
//# checkout base64encode.org and Python Official docs for encoding and decoding base64.encodestring(S)
//# base64 takes a string converts it into bytes in Utf8, then it encodes it and decodes it back to a string
//# encoded = base64.b64encode("data to be encoded")
//# >>>encoded()
//#
//# dedoding
//# data = base64.b64decode(encoded)
//# data()
//
//# we want the format of the password to be a string. similar to brcrypt in nodejs
//ecoded_string = base64.b64encode(data_to_encode())
//# print(encoded_string) # returns b'siisbu90nns9' # b means bytes data
//decoded_passeord = encoded_string.decode(utf-8)
//
//consumer_key =  key.consumer_key
//consumer_secret =  key.consumer_secret
//api_url = ("https://safaricom.co.ke/oauth/v1/stkpush/v1/generate?grant_type=client_credentials")
//r = requests.get(api_url, auth=HTTPBasicAuth(consumer_key, consumer_secret))
//# this async response can be returned as request.get, request.post# post,  delete, put,
//# To:do change the aboce request to use graphql single post mutation
//
//
//
//# print(r.text) = our consumer secret
//
//def lipa_na_mpesa():
//    """ Lipa na MPesa online:
//
//    # cosumer key and consumer secret
//    # test credentials: LNM Business Shortcode & LNM Online Passkey
//    # Access Token
//    # correct Transaction parameters for the requests POST call
//    """
//
//    access_token = "Access-Token" # "Access-Token"
//    api_url = ("https://safaricom.co.ke/mpesa/stkpush/v1/processrequest")
//
//    headers = {"Authorization": "Bearer %s" % access_token}
//
//    requests = {
//        "BusinessShortCode": keys.business_shortcode, #
//        "Password": decoded_password, # string
//        "TimeStamp": formated_time, # string
//        "TransactionType": "CustomerPayBillOnline",
//        "Amount": "1" # can be Postgres double = 15.50 or integer 15
//        "PartyA": keys.phone_number,
//        "PartyB": keys.business_shortCode,
//        "CallbackURL": "https://softavnetworks.co.ke/mpesa/lipa_na_mpesa",
//        "AccountReference": "12345678",
//        "TransactionDesc": "Pay for Letamz Classic shoes bill"
//    }
//
interface LipaNaMpesa {

}
export const LipaNaMpesa = async () =>  {
    .await.response()
}