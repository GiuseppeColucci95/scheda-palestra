import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WorkoutPage() {

  //datas
  const workoutsToSet = JSON.parse(localStorage.getItem("schede"));
  const { id } = useParams();
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [exerciseForm, setExerciseForm] = useState({ titolo: "", serie: "", ripetizioni: "", recupero: "" });
  const [workouts, setWorkouts] = useState(workoutsToSet);
  const [workout, setWorkout] = useState(null);

  //submit adding exercise
  function handleSubmitAdd(e) {

    e.preventDefault();
    console.log(exerciseForm);

    const workoutToEdit = workout;
    workoutToEdit.esercizi.push(exerciseForm);

    const workoutsToEdit = JSON.parse(localStorage.getItem("schede"));
    for (let i = 0; i < workoutsToEdit.length; i++) {
      if (workoutsToEdit[i].id == id) {
        workoutsToEdit[i] = workoutToEdit;
      }
    }

    localStorage.setItem("schede", JSON.stringify(workoutsToEdit));

    setExerciseForm({ titolo: "", serie: "", ripetizioni: "", recupero: "" });
    setShowExerciseForm(false);
    setWorkouts(workoutsToEdit);
  }

  useEffect(() => {
    console.log("APERTURA");
    const workoutToSet = workouts.find(workout => workout.id == id);
    setWorkout(workoutToSet);
  }, [workouts]);


  //template
  return (
    <>
      <div className="container py-5">

        <div id="workout-title" className="d-flex justify-content-between align-items-center">
          <h1 className="pb-2 m-0">{(workout) && workout.titolo}</h1>
          <h6 className="m-0"><strong>Durata:</strong> {(workout) && workout.durata} minuti | <strong>Gruppi muscolari:</strong> [{(workout) && workout.gruppiMuscolari}]</h6>
        </div>
        {/* TITLE */}

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
                (workout)
                &&
                (
                  workout.esercizi.map(esercizio => (
                    <tr key={esercizio.titolo}>
                      <td>{esercizio.titolo}</td>
                      <td>{esercizio.serie}</td>
                      <td>{esercizio.ripetizioni}</td>
                      <td>{esercizio.recupero} secondi</td>
                    </tr>))
                )
              }
            </tbody>
            {/* EXERCISES */}

          </table>
        </div>
        {/* BIG TABLE */}

        <div className="d-block d-sm-none pb-3">
          {
            (workout)
            &&
            (
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
            )
          }
        </div>
        {/* SMALL TABLE */}

        <div className="div d-flex justify-content-between row-gap-2 buttons-workout">
          <div className="d-flex gap-2 buttons-workout">
            <Link to={'/'} className="button btn btn-sm">Torna Indietro</Link>
          </div>
          <div className="d-flex gap-2 buttons-workout">
            {
              !showExerciseForm && (<button onClick={() => setShowExerciseForm(true)} className="btn btn-sm btn-success" href="#">Aggiungi esercizio</button>)
            }
            <button className="btn btn-sm btn-warning" href="#">Modifica</button>
            <button className="btn btn-sm btn-danger" href="#">Elimina</button>
          </div>
        </div>
        {/* BUTTONS */}

        {
          showExerciseForm &&
          (
            <form onSubmit={e => handleSubmitAdd(e)} id="exercise-form" className="mt-5 border rounded p-3">
              <div className="row d-flex justify-content-center align-items-end row-gap-2">
                <div className="col-xs-12 col-md-12 col-xl-5">
                  <div>
                    <label htmlFor="nome" className="form-label">Nome esercizio</label>
                    <input
                      required
                      value={exerciseForm.titolo}
                      onChange={(e) => setExerciseForm({ ...exerciseForm, titolo: e.target.value })}
                      type="text"
                      name="nome"
                      id="nome"
                      className="form-control"
                      placeholder="Inserisci il nome dell'esercizio..." />
                  </div>
                </div>
                <div className="col-xs-12 col-md-4 col-xl-2">
                  <div>
                    <label htmlFor="serie" className="form-label">Serie</label>
                    <input
                      required
                      value={exerciseForm.serie}
                      onChange={(e) => setExerciseForm({ ...exerciseForm, serie: Number(e.target.value) })}
                      type="number"
                      min="1"
                      name="serie"
                      id="serie"
                      className="form-control"
                      placeholder="Numero di serie..." />
                  </div>
                </div>
                <div className="col-xs-12 col-md-4 col-xl-2">
                  <div>
                    <label htmlFor="ripetizioni" className="form-label">Ripetizioni</label>
                    <input
                      required
                      value={exerciseForm.ripetizioni}
                      onChange={(e) => setExerciseForm({ ...exerciseForm, ripetizioni: Number(e.target.value) })}
                      type="number"
                      min="1"
                      name="ripetizioni"
                      id="ripetizioni"
                      className="form-control"
                      placeholder="Numero di ripetizioni..." />
                  </div>
                </div>
                <div className="col-xs-12 col-md-4 col-xl-2">
                  <div>
                    <label htmlFor="recupero" className="form-label">Recupero</label>
                    <input
                      required
                      value={exerciseForm.recupero}
                      onChange={(e) => setExerciseForm({ ...exerciseForm, recupero: Number(e.target.value) })}
                      type="number"
                      min="1"
                      name="recupero"
                      id="recupero"
                      className="form-control"
                      placeholder="Secondi di recupero..." />
                  </div>
                </div>
                <div className="col-xs-12 col-md-4 col-xl-1 text-center">
                  <button type="submit" className="btn btn-sm btn-success mb-1">Aggiungi</button>
                </div>
              </div>

            </form>
            //FORM DI AGGIUNTA O MODIFICA ESERCIZIO
          )
        }
        {/* FORM DI AGGIUNTA O MODIFICA ESERCIZIO */}


      </div>
    </>
  );
}