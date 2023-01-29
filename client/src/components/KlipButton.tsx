import axios from 'axios'

export default function KlipButton() {
  async function handleConnect() {
    const userAgent = window.navigator.userAgent
    const platform = window.navigator.platform
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
    const iosPlatforms = ['iPhone', 'iPad', 'iPod']
    let os = null
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'MacOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
    const isMobile = os === 'iOS' || os === 'Android' ? true : false
    const getKlipPrepareUrl = ( request_key:string)=>{
      if(isMobile){
        return window.location.href = `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`
      }
      else return console.log(`https://klipwallet.com/?target=/a2a?request_key=${request_key}`)
    }

    const bappName = "DiD You Eat?";
    const getAddress = await axios.post('https://a2a-api.klipwallet.com/v2/a2a/prepare',{bapp:{name:bappName},type : 'auth'})
    const {request_key} = getAddress.data
    getKlipPrepareUrl(request_key)
    const timer = setInterval(()=>{
      axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then((res)=>{
        if(res.data.result){
          alert(res.data.result.klaytn_address)
          clearInterval(timer)
        }
      })
    },1000)
  }

  return (
    <button className="header__connect" onClick={handleConnect}>
      Klip Connect
    </button>
  );
}
