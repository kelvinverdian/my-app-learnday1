import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo
        isDiscount="yes"
        product="Hyundai"
        namamobil="Stargazer"
        harga="280.000.000"
      />
    </div>
  );
}
function FotoProduk() {
  return (
    <div className="Foto">
      <img src="stargazerhd.png"></img>
    </div>
  );
}

function Discount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p>Discount 50% OFF</p>;
  } else if (isDiscount == "coming") {
    return <p>Discount is Coming soon</p>;
  } else {
    return <p>Belum ada Discount</p>;
  }
}

function ProdukInfo(props) {
  const { product, namamobil, harga, isDiscount } = props; // Tipe data Cate bersifat dinamis
  const benefits = ["Nyaman", "Luas", "Terjangkau"];
  const listbenefits = benefits.map((itembenefits) => <li>{itembenefits}</li>);
  return (
    <div className="Deskripsi">
      <h1 className="Cate">{product}</h1>
      <h2 className="Title">{namamobil}</h2>
      <p className="Price">{harga}</p>
      <Discount isDiscount={isDiscount} />
      <p className="info">
        className Saatnya menikmati era baru MPV bersama Hyundai STARGAZER,
        inovasi mobilitas untuk setiap perjalanan berkualitas. Inilah standar
        baru mobil keluarga yang menghadirkan kenyamanan maksimal dan fitur
        berkelas, serta memberikan ruang luas untuk kebersamaan Anda dan orang
        terkasih.
      </p>
      <ul>{listbenefits}</ul>
      <a onClick={(e) => TambahCart(namamobil, e)} href="#">
        Add to Cart
      </a>
    </div>
  );
  function TambahCart(e) {
    console.log("Berhasil Membeli " + e);
  }
}

export default App;
