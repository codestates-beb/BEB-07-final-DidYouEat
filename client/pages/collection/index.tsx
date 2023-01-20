import Header from "@/src/components/Header"

export default function Collection() {

  return(
    <div className="collection">
      <Header/>
      <h1 className="collection__h1">My collection</h1>
      <div className="collection__row">
        <div className="collection__col1">1</div>
        <div className="collection__col2">2</div>
        <div className="collection__col3">3</div>
        <div className="collection__col4">4</div>
      </div>
      <div className="collection__row">
        <div className="collection__col1">1</div>
        <div className="collection__col2">2</div>
        <div className="collection__col3">3</div>
        <div className="collection__col4">4</div>
      </div>
      <div className="collection__row">
        <div className="collection__col1">1</div>
        <div className="collection__col2">2</div>
        <div className="collection__col3">3</div>
        <div className="collection__col4">4</div>
      </div>
      <div className="collection__row">
        <div className="collection__col1">1</div>
        <div className="collection__col2">2</div>
        <div className="collection__col3">3</div>
        <div className="collection__col4">4</div>
      </div>
      
      <button className="collection__scanQR">Scan QR code</button>
    </div>
  )
}
