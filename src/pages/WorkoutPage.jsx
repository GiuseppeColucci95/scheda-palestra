import { useParams } from "react-router-dom";

export default function WorkoutPage() {

  //datas
  const { id } = useParams();

  //read workout from local storage
  const workout = JSON.parse(localStorage.getItem("schede")).find(workout => workout.id == id);

  //template
  return (
    <>
      <div className="container py-5">

        <div id="workout-title" className="d-flex justify-content-between align-items-center">
          <h1 className="pb-2 m-0">{workout.titolo}</h1>
          <h6 className="m-0">Gruppi muscolari: [{workout.gruppiMuscolari}]</h6>
        </div>

        <div className="d-none d-sm-block">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Esercizio</th>
                <th>Serie</th>
                <th>Ripetizioni</th>
                <th>Recupero</th>
              </tr>
            </thead>

            <tbody>
              {
                workout.esercizi.map(esercizio => (
                  <tr key={esercizio.titolo}>
                    <td>{esercizio.titolo}</td>
                    <td>{esercizio.serie}</td>
                    <td>{esercizio.ripetizioni}</td>
                    <td>{esercizio.recupero} secondi</td>
                  </tr>))
              }
            </tbody>
            {/* EXERCISES */}

          </table>
        </div>
        {/* BIG TABLE */}

        <div className="d-block d-sm-none">
          {
            workout.esercizi.map(esercizio => (
              <div key={esercizio.titolo} className="border p-2">
                <div className="row">
                  <div className="col-12"><strong>Esercizio:</strong> {esercizio.titolo}</div>
                  <div className="col-12"><strong>Serie:</strong> {esercizio.serie}</div>
                  <div className="col-12"><strong>Ripetizioni:</strong> {esercizio.ripetizioni}</div>
                  <div className="col-12"><strong>Recupero:</strong> {esercizio.recupero} secondi</div>
                </div>
              </div>
            ))
          }
        </div>
        {/* SMALL TABLE */}

      </div>
    </>
  );
}