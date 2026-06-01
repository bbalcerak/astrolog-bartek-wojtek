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
    { id: '1', name: 'Syriusz A', type: 'Gwiazda ciągu głównego', distance: '8.6 lat świetlnych', imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500' },
    { id: '2', name: 'Ganimedes', type: 'Księżyc Jowisza', distance: '628.3 mln km (średnio)', imageUrl: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500' },
    { id: '3', name: 'Saturn', type: 'Gazowy olbrzym', distance: '1.4 mld km (średnio)', imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500' },
    { id: '4', name: 'Mgławica NGC 604', type: 'Obszar H II (Mgławica)', distance: '2.73 mln lat świetlnych', imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500' },
    { id: '5', name: 'Kepler 452-b', type: 'Egzoplaneta (Superziemia)', distance: '1400 lat świetlnych', imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500' }
];

export default function App() {
    const [objects] = useState<CelestialObject[]>(Obiekty);

    return (
        <div className="app-theme">
            <header className="app-header">
                <h1>Panel Obserwacyjny Astrolog</h1>
            </header>

            <main className="app-content">
                <section className="left-panel">
                    <CatalogList
                        listaObiektow={objects}
                        kliknietoObiekt={() => {}}
                        wybraneId={null}
                    />
                </section>

                <section className="center-panel">
                    <ObjectDetails/>
                </section>

                <section className="right-panel">
                    <DiscoveryForm />
                </section>
            </main>
        </div>
    );
}