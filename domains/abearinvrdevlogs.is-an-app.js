// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Just a Website for My Game Devlogs and Stuff about me
    ', // describe your project in this field
  domain: 'https://a-bear-in-vr-devlogs-is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'abearinvrdevlogs', // desired subdomain name
  owner: {
    email: '<sotoadonis53@gmail.com>',
  },
  record: {
    CNAME: '<ABearInVR.github.io>', // e.g.: <your-github-account>.github.io
    TXT: ['list', 'of', 'required', 'txt', 'records'],
    A: ['list', 'of', 'IPv4', 'addresses', 'like', 'a', '127.0.0.1'],
    AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    NS: ['list', 'of', 'nameservers'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
