export function DiscoveryForm() {
    return (
        <div className="discovery-form-container">
            <h2>Rejestr Odkryć</h2>


            <form className="discovery-form">
                <div className="form-group">
                    <label>Nazwa obiektu:</label>
                    <input type="text" placeholder="np. Kepler-22b" required />
                </div>

                <div className="form-group">
                    <label>Typ obiektu:</label>
                    <input type="text" placeholder="np. Egzoplaneta" required />
                </div>

                <div className="form-group">
                    <label>Odległość od Ziemi:</label>
                    <input type="text" placeholder="np. 620 lat świetlnych" required />
                </div>

                <div className="form-group">
                    <label>Link do zdjęcia (URL):</label>
                    <input type="url" placeholder="https://images.unsplash.com/..." required />
                </div>

                <button type="submit" className="submit-btn">Dodaj obiekt</button>
            </form>
        </div>
    );
}