



function ProfileCards ({img,titulo,descr,precio}) {
    return (

    <div className="card">
        <div className="card-img">
            <figure className="image is-1by1">
                <img src={img}/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <h2 className="title is-4">{titulo}</h2>
                <h3 className="subtitle is-6">{descr}</h3>
                <h4 className="subtitle is-6">{precio}</h4>
            </div>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    </div>

    );
}

export default ProfileCards;