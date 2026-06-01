
interface CelestialObject {
    id: string;
    name: string;
    imageUrl: string;
}

interface Props {
    listaObiektow: CelestialObject[];
    kliknietoObiekt: (id: string) => void;
    wybraneId: string | null;
}

export function CatalogList(props: Props) {

    const listaObiektow = props.listaObiektow;
    const kliknietoObiekt = props.kliknietoObiekt;
    const wybraneId = props.wybraneId;

    return (
        <div className="catalog-list">
            <h2>Katalog Obiektów</h2>
            <div className="list-container">
                {listaObiektow.map((item) => {
                    const active = wybraneId === item.id ? 'active' : '';
                    return (
                        <div
                            key={item.id}
                            className={`list-item ${active}`}
                            onClick={() => kliknietoObiekt(item.id)}
                        >
                            <img src={item.imageUrl} alt={item.name} className="thumbnail" />
                            <span className="object-name">{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}