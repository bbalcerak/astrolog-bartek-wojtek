import type { CelestialObject } from '../App';

interface Props {
    obiekt: CelestialObject | null;
    zakonczObserwacje: () => void;
}

export function ObjectDetails({ obiekt, zakonczObserwacje }: Props) {
    if (!obiekt) {
        return (
            <div className="object-details">
                <h2>Panel Obserwacyjny</h2>
                <p>Kliknij obiekt z katalogu po lewej stronie, aby rozpocząć obserwację</p>
            </div>
        );
    }

    return (
        <div className="object-details">
            <h2>Panel Obserwacyjny</h2>
            <div className="details-card">
                <img src={obiekt.imageUrl} alt={obiekt.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
                <h3>{obiekt.name}</h3>
                <p><strong>Typ:</strong> {obiekt.type}</p>
                <p><strong>Odległość:</strong> {obiekt.distance}</p>

                <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    <button onClick={zakonczObserwacje}>Zakończ obserwację</button>
                    <button onClick={() => alert('Funkcja usuwania w budowie!')}>Usuń obiekt</button>
                </div>
            </div>
        </div>
    );
}