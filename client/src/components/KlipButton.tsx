import axios from 'axios'
import { useState } from 'react'
import Modal from 'react-modal'
import QRCode from 'qrcode'

export default function KlipButton() {
  const [showModal, setShowModal] = useState(false)
  const [reqKey, setReqKey] = useState('')
  const toggleModal = ()=>{
    setShowModal(!showModal)
  }
  const isAuthenticated = ()=>{
    console.log(reqKey)
    axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${reqKey}`).then((res)=>{
      if(res.data.result){
        alert(`Connect Wallet Success!\nYour wallet address : ${res.data.result.klaytn_address}`)
        setShowModal(!showModal)
      }
    })
  }
  
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
    toggleModal()
    const getKlipPrepareUrl = ( request_key:string)=>{
      if(isMobile){
        return window.location.href = `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`
      }
      else {
        // QRCode.toCanvas(document.getElementById('canvas'),'sample', (err)=>{if(err)console.log(err); console.log('success')})
        return QRCode.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=${request_key}`).then(res=>{
          console.log(res)
          const imgEl = document.getElementById('authQR')
          imgEl.src = res
        })
      }
    }

    const bappName = "DiD You Eat?";
    const getAddress = await axios.post('https://a2a-api.klipwallet.com/v2/a2a/prepare',{bapp:{name:bappName},type : 'auth'})
    const {request_key} = getAddress.data
    getKlipPrepareUrl(request_key)
    setReqKey(request_key)
    
  }

  return (
    <div>
      <button className="header__connect" onClick={handleConnect}>
        Klip Connect
      </button>
        <Modal isOpen={showModal} onRequstClose={toggleModal}>
          <h1>title</h1>
          <p>content</p>
          <canvas id='canvas'></canvas>
          <img id='authQR'/>
          <button onClick={isAuthenticated}>인증완료</button>
        </Modal>
    </div>
  );
}
