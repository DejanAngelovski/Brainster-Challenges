import { v4 as uuidv4 } from 'uuid';
type Props = {
  bikearr: [];
};

export default function Card({ bikearr }: Props) {
  return (
    <div className="col-md-9">
      <div className="row card">
        {bikearr?.map(
          (bike: { image: string; name: string; price: string }) => {
            return (
              <div className="col-md-4 card-cont" key={uuidv4()}>
                <a href="#" className="inner">
                  <div className="img-cont">
                    <img
                      src={require(`../img/${bike.image}.png`)}
                      className="card-img img img-responsive"
                    />
                  </div>
                  <div className="content-cont">
                    <h2>{bike.name}</h2>
                    <p className="price">${bike.price}</p>
                  </div>
                </a>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
