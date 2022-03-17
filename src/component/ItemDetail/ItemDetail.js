import { Image } from "react-bootstrap";

const ItemDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1>Titulo: Udemy</h1>
        </div>
        <div className="col-12 col-md-4">
          <Image
            src="https://mms.businesswire.com/media/20191105005285/es/743322/23/Udemy_Logo.jpg"
            fluid
            responsive
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
