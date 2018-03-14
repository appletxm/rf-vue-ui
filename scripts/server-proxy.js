var http = require('http')
var fs = require('fs')
var formidable = require('formidable')

var serverProxy = {
  doProxy: function (opt, request, response, isSingleFile) {
    var isMultipartData = false
    var contentType = request['headers']['content-type']

    response.setHeader('content-type','application/json;charset=UTF-8')
    isMultipartData = contentType && contentType.indexOf('multipart/form-data') >= 0

    if (request.method === 'POST') {
      if(isMultipartData === true){
        this.doPostMultipartData(opt, request, response, isSingleFile)
      } else {
        this.doPost(opt, request).then((result) => {
          this.createRequest(result, response, request)
        })
      }
    } else {
      this.doGet(opt, request).then((result) => {
        this.createRequest(result, response, request)
      })
    }
  },

  createRequest: function (result, response, request) {
    var body = ''
    var req
    var querystring = require('querystring')

    req = http.request(result.options, function (res) {
      console.log('[PROXY STATUS]: ' + res.statusCode)
      console.log('[PROXY HEADERS]: ' + JSON.stringify(res.headers))

      res.setEncoding('utf8')
      //send data to response method 1
      res.on('data', function (chunk) {
        // console.log('[PROXY BODY]: ' + chunk)
        body += chunk
      })

      //send data to response method 2
      //res.pipe(response)
      res.on('end', function () {
        console.info('[PROXY response complete]')
        response.headers = res.headers
        response.send(body)
        response.end()
      })
    })

    req.write(result.postData + '\n')
    req.on('error', function (e) {
      console.log('problem with request: ' + e.message)
    })
    req.end(function () {
      console.info('[PROXY Request success]')
    })
  },

  doPost: function (opt, request) {
    var options
    var postData = ''
    var promise
    // var querystring = require('querystring')
    var contentType
    var isApplicationJson

    options = {
      host: opt.host, // 这里是代理服务器       
      port: opt.port, // 这里是代理服务器端口 
      method: request.method,
      path: request.originalUrl,
      headers: {...request.headers}
    }

    contentType = request['headers']['content-type']
    isApplicationJson = contentType && contentType.indexOf('application/json') >= 0

    promise = new Promise(function (resolve) {
      if (!contentType || isApplicationJson) {
        request.on('data', function (data) {
          postData += data
        })

        request.on('end', function () {
          console.info('[POST DATA NORMAL]', postData)
          options['headers']['Content-Type'] = isApplicationJson ? 'application/json;charset=UTF-8' : 'text/html'
          options['headers']['Content-Length'] = Buffer.byteLength(postData)
          resolve({options, postData})
        })
      } else {
        resolve({options, postData})
      }
    })

    return promise
  },

  doPostMultipartData: function(opt, request, response, isSingleFile){
    var options
    options = {
      host: opt.host, // 这里是代理服务器       
      port: opt.port, // 这里是代理服务器端口 
      method: request.method,
      path: request.originalUrl,
      headers: {...request.headers}
    }
    
    if(isSingleFile === true){
      this.createSingleFileRequest(options, request.file, response)
    }
  },

  createSingleFileRequest: function(options, file, response) {
    var req, body
    var boundaryKey = Math.random().toString(16)
    var payload = '--' + boundaryKey + '\r\n'
    var enddata  = '\r\n--' + boundaryKey + '--'
    var fileStream

    payload = payload
    + 'Content-Type: ' + file.mimetype + '\r\n' 
    + 'Content-Disposition: form-data; name="' + file.fieldname + '"; filename="' + file.originalname + '"\r\n'
    + 'Content-Transfer-Encoding: binary\r\n\r\n'

    options['headers']['Content-Type'] = 'multipart/form-data; boundary=' + boundaryKey + ''
    options['headers']['Content-Length'] = Buffer.byteLength(payload) + Buffer.byteLength(enddata) + file.size

    req = http.request(options, function(res) {
      console.log("[PROXY SINGLE FILE STATUS CODE] ", res.statusCode)
      res.setEncoding('utf8')
      res.on('data', function(bundle) {
        body += (bundle || '')
      })

      // res.pipe(response)

      res.on('end', function() {
        body = body.replace(/^.*(\{.+\}).*$/, '$1')
        console.info('[PROXY SINGLE FILE COMPLETED]', body)
        response.headers = res.headers
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        // response.type('text/html;charset=UTF-8')
        response.send(body)
        response.end()
      })
    })
    req.on('error', function(e) {
      console.error("error:"+e)
    })

    req.write(payload)

    fileStream = fs.createReadStream(file.path, { bufferSize: 4 * 1024 })
    fileStream.pipe(req, {end: false})
    fileStream.on('end', function() {
      req.end(enddata); 
    })
  },

  doPostWWWForm: function(content, request, response) {
    var querystring = require('querystring')
    var post_data = querystring.stringify({
      type : "text",
      content: content
    });
    
    var options = {
      host: 'api.com',
      port: 443,
      path: '/messages?access_token='+accessToken,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
      }
    }
    
    var reqHttps = https.request(options, function(res) {
      console.log("statusCode: ", res.statusCode)
      console.log("headers: ", res.headers)
    
      res.setEncoding('utf8')

      res.on('data', function(body1) {
        response.send(body1)
        console.log("body:"+body1);
      })
    })
      
    reqHttps.write(post_data)
    reqHttps.end()
    reqHttps.on('error', function (e) {
      console.error("error:" + e)
      return "系统异常：" + e.message
    })
  },

  doGet: function (opt, request) {
    console.info('[PROXY HTTP GET PARAMS]', request.params, request.query, request.body)
    var options
    var postData = ''
    var promise
    
    options = {
      host: opt.host, // 这里是代理服务器       
      port: opt.port, // 这里是代理服务器端口 
      method: request.method,
      path: request.originalUrl,
      headers: {...request.headers}
    }

    promise = new Promise(function (resolve) {
      resolve({options, postData})
    })

    return promise
  }
}

module.exports = serverProxy
 