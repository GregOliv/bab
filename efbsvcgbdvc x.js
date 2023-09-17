window.test_ads_link = true;
async function detectAdBlock() {
// https://easylist-downloads.adblockplus.org/easylist.txt -- use this list to build as many URLs you want if you want a very deep inspection you can add more
const urls = [
  'https://pagead2.googlesyndication.com/pagead/show_ads.js',
  'https://googleads.g.doubleclick.net/pagead/id',
  'https://static.doubleclick.net/instream/ad_status.js',
  'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
  'https://static.ads-twitter.com/uwt.js',
  '||us-u.openx.net^',
  '||pagead2.googlesyndication.com^*/pagead/js/*/show_ads_impl.js',
  '||pagead2.googlesyndication.com^*/pagead/osd.js',
  '||adserver.adtechus.com^*/adiframe/*',
  '||bid.g.doubleclick.net^*/adview?',
  '||googleads.g.doubleclick.net^*/pagead/ads?',
  '||googleads.g.doubleclick.net^*/pagead/lvz?'
]
  for(let i = 0 ; i < urls.length ; i++ ){
    window.test_ads_link = false
    const url = urls[i]
    try {
      await fetch(new Request(url), { mode: 'no-cors' }).catch(error => { 
        // no-cors mode doesn't allow u to have response data but here we don't need it so disable it because we are to just check whether Adblock allow us to hit the url
        //console.log(error);
        window.test_ads_link = true;
      });
      
    } catch (e) {
      window.test_ads_link = true
    }    
    // if(window.test_ads_link == false){
    //   console.log(url)
    // }
    if(window.test_ads_link == true){ 
    // blocked so adblock was detected, but if some other error setted it true nobody can help u 
       return;
    }
    else{
      // Just keep looking at other links and check if they are getting blocked or not
    }
  }
}
