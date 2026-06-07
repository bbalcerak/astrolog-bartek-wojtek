import { useState } from 'react';
import { CatalogList } from './components/CatalogList';
import { ObjectDetails } from './components/ObjectDetails';
import { DiscoveryForm } from './components/DiscoveryForm';
import './App.css';

export interface CelestialObject {
    id: string;
    name: string;
    type: string;
    distance: string;
    imageUrl: string;
}

const Obiekty: CelestialObject[] = [
    { id: '1', name: 'Syriusz A', type: 'Gwiazda ciągu głównego', distance: '8.6 lat świetlnych', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Close-up_of_Sirius.jpg' },
    { id: '2', name: 'Ganimedes', type: 'Księżyc Jowisza', distance: '628.3 mln km (średnio)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Ganymede_-_Perijove_34_Composite.png' },
    { id: '3', name: 'Saturn', type: 'Gazowy olbrzym', distance: '1.4 mld km (średnio)', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Saturn_-_April_25_2016_%2837612580000%29.png' },
    { id: '4', name: 'Mgławica NGC 604', type: 'Obszar H II (Mgławica)', distance: '2.73 mln lat świetlnych', imageUrl: 'https://gnn.pl/wp-content/uploads/2024/03/webb-peers-into-the-te-1.jpg' },
    { id: '5', name: 'Kepler 452-b', type: 'Egzoplaneta (Superziemia)', distance: '1400 lat świetlnych', imageUrl: 'https://t3.ftcdn.net/jpg/14/83/00/18/360_F_1483001853_WcZjZI86cE9BFBt8jLPu2otQMHFbuYBI.jpg' }
];

export default function App() {
    const [objects, setObjects] = useState<CelestialObject[]>(Obiekty);

    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedObject = objects.find(obj => obj.id === selectedId) || null;

    const handleAddObject = (nowyObiekt: Omit<CelestialObject, 'id'>) => {
        const obiektZId: CelestialObject = {
            ...nowyObiekt,
            id: Date.now().toString()
        };
        setObjects([...objects, obiektZId]);
    };

    return (
        <div className="app-theme">
            <header className="app-header">
                <h1>Panel Obserwacyjny Astrolog</h1>
            </header>

            <main className="app-content">
                <section className="left-panel">
                    <CatalogList
                        listaObiektow={objects}
                        kliknietoObiekt={setSelectedId}
                        wybraneId={selectedId}
                    />
                </section>

                <section className="center-panel">
                    <ObjectDetails
                        obiekt={selectedObject}
                        zakonczObserwacje={() => setSelectedId(null)}
                    />
                </section>

                <section className="right-panel">
                    <DiscoveryForm dodajObiekt={handleAddObject} />
                </section>
            </main>
        </div>
    );
}