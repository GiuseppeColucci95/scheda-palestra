import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewWorkoutPage() {

  //datas
  const [workoutForm, setWorkoutForm] = useState({ titolo: "", durata: "", gruppiMuscolari: "" });
  const navigate = useNavigate();

  //function to add a workout and redirect to workout page
  function handleAddWorkout(e) {

    e.preventDefault();

    const workoutsToEdit = JSON.parse(localStorage.getItem("schede")) || [];

    let idToSet = 0;
    for (let i = 0; i < workoutsToEdit.length; i++) {
      if (workoutsToEdit[i].id > idToSet) {
        idToSet = workoutsToEdit[i].id;
      }
    }

    const newCompleteWorkout = {
      id: ++idToSet,
      numeroEsercizi: 0,
      titolo: workoutForm.titolo,
      durata: workoutForm.durata,
      gruppiMuscolari: workoutForm.gruppiMuscolari,
      esercizi: []
    }

    workoutsToEdit.push(newCompleteWorkout);
    localStorage.setItem("schede", JSON.stringify(workoutsToEdit));

    navigate(`/workout/${idToSet}`);
  }

  //template
  return (
    <>
      <div className="container">

        <h1 className="text-center pt-5 pb-3">CREA IL TUO NUOVO ALLENAMENTO</h1>

        <form onSubmit={handleAddWorkout} className="mb-3 border rounded p-3">
          <div className="row d-flex justify-content-center align-items-end row-gap-3">

            <div className="col-xs-12 col-xxl-4">
              <div>
                <label htmlFor="nome" className="form-label">Nome workout</label>
                <input
                  autoFocus
                  required
                  value={workoutForm.titolo}
                  onChange={(e) => setWorkoutForm({ ...workoutForm, titolo: e.target.value })}
                  type="text"
                  name="nome"
                  id="nome"
                  className="form-control"
                  placeholder="Inserisci il nome del workout..." />
              </div>
            </div>

            <div className="col-xs-12 col-xxl-3">
              <div>
                <label htmlFor="durata" className="form-label">Durata</label>
                <input
                  required
                  value={workoutForm.durata}
                  onChange={(e) => setWorkoutForm({ ...workoutForm, durata: Number(e.target.value) })}
                  type="number"
                  min="1"
                  name="durata"
                  id="durata"
                  className="form-control"
                  placeholder="Durata in minuti..." />
              </div>
            </div>

            <div className="col-xs-12 col-xxl-4">
              <div>
                <label htmlFor="gruppiMuscolari" className="form-label">Gruppi muscolari</label>
                <input
                  required
                  value={workoutForm.gruppiMuscolari}
                  onChange={(e) => setWorkoutForm({ ...workoutForm, gruppiMuscolari: e.target.value })}
                  type="text"
                  name="gruppiMuscolari"
                  id="gruppiMuscolari"
                  className="form-control"
                  placeholder="Gruppi muscolari..." />
              </div>
            </div>

            <div className="col-xs-12 col-xxl-1 text-center">
              <button type="submit" className="btn btn-sm btn-success mb-1">Conferma</button>
            </div>

          </div>
        </form>
        {/* FORM DI CREAZIONE SCHEDA */}

      </div>
    </>
  );
}