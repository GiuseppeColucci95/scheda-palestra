import { Link } from "react-router-dom";

export default function Homepage() {

  //datas
  const schede = JSON.parse(localStorage.getItem("schede"));

  //template
  return (
    <>
      <div className="container py-5">

        <h1 id="schede-title" className="text-center pb-2">LE TUE SCHEDE DI ALLENAMENTO</h1>

        <div className="row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

          {
            schede.map(workout => (

              <div key={workout.id} className="col">
                <div id="workout-card" className="card">
                  <div className="card-header">
                    <h2 className="m-0 text-center">{workout.titolo}</h2>
                  </div>
                  <div className="card-body">
                    <div className="fs-5"><strong>Durata allenamento:</strong> {workout.durata} minuti</div>
                    <div className="fs-5"><strong>Numero di esercizi:</strong> {workout.numeroEsercizi}</div>
                    <div className="fs-5"><strong>Gruppi muscolari:</strong> {workout.gruppiMuscolari}</div>
                  </div>
                  <div className="card-footer">
                    <div id="buttons" className="div d-flex justify-content-center gap-2">
                      <Link to={`/workout/${workout.id}`} className="btn btn-sm btn-success" href="#">Visualizza</Link>
                      <button className="btn btn-sm btn-warning" href="#">Modifica</button>
                      <button className="btn btn-sm btn-danger" href="#">Elimina</button>
                    </div>
                  </div>
                </div>
              </div>
              // WORKOUT CARD

            ))
          }

        </div>
        {/* WORKOUTS ROW */}

      </div>
    </>
  );
}