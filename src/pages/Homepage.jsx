import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Homepage() {

  //datas
  const schede = JSON.parse(localStorage.getItem("schede"));
  const navigate = useNavigate();

  //function to delete a workout
  function handleDeleteWorkout(id) {

    const workoutsToEdit = JSON.parse(localStorage.getItem("schede"));
    const newWorkoutsToSet = [];
    for (let i = 0; i < workoutsToEdit.length; i++) {
      if (workoutsToEdit[i].id != id) {
        newWorkoutsToSet.push(workoutsToEdit[i]);
      }
    }

    localStorage.setItem("schede", JSON.stringify(newWorkoutsToSet));

    navigate('/');
  }

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
                      <Link to={`/workout/${workout.id}`} className="button btn btn-sm">Visualizza</Link>
                      <button onClick={() => handleDeleteWorkout(workout.id)} className="btn btn-sm btn-danger" href="#">Elimina</button>
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