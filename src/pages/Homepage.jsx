export default function Homepage() {

  //datas
  const schede = [
    {
      titolo: "Workout A",
      numeroEsercizi: 7,
      durata: 70,
      gruppiMuscolari: "petto, spalle, bicipiti",
      esercizi: [
        {
          titolo: "Distensioni manubri su panca piana",
          serie: 4,
          ripetizioni: 8,
          recupero: 150
        },
        {
          titolo: "Chest press",
          serie: 3,
          ripetizioni: 8,
          recupero: 90
        },
        {
          titolo: "Alzate laterali",
          serie: 3,
          ripetizioni: 10,
          recupero: 60
        },
        {
          titolo: "Deltoids machine",
          serie: 3,
          ripetizioni: 10,
          recupero: 60
        },
        {
          titolo: "Hammer curl alternato manubri",
          serie: 3,
          ripetizioni: 8,
          recupero: 60
        },
        {
          titolo: "Bicipiti al cavo sbarra",
          serie: 3,
          ripetizioni: 12,
          recupero: 45
        },
        {
          titolo: "Addominali alle parallele",
          serie: 4,
          ripetizioni: 20,
          recupero: 60
        }
      ]
    },
    {
      titolo: "Workout B",
      numeroEsercizi: 6,
      durata: 70,
      gruppiMuscolari: "dorso, spalle, bicipiti",
      esercizi: [
        {
          titolo: "T-bar presa larga",
          serie: 4,
          ripetizioni: 8,
          recupero: 150
        },
        {
          titolo: "Lat machine presa larga",
          serie: 3,
          ripetizioni: 8,
          recupero: 120
        },
        {
          titolo: "Arnold press",
          serie: 3,
          ripetizioni: 8,
          recupero: 120
        },
        {
          titolo: "Trap bar bent over row",
          serie: 4,
          ripetizioni: 10,
          recupero: 60
        },
        {
          titolo: "Biceps machine",
          serie: 4,
          ripetizioni: 12,
          recupero: 60
        },
        {
          titolo: "Abdominal machine",
          serie: 4,
          ripetizioni: 12,
          recupero: 60
        }
      ]
    },
    {
      titolo: "Workout C",
      numeroEsercizi: 6,
      durata: 85,
      gruppiMuscolari: "gambe, spalle, dorso",
      esercizi: [
        {
          titolo: "Squat al multipower",
          serie: 4,
          ripetizioni: 8,
          recupero: 150
        },
        {
          titolo: "Military press al multipower",
          serie: 4,
          ripetizioni: 6,
          recupero: 120
        },
        {
          titolo: "Leg extension",
          serie: 3,
          ripetizioni: 8,
          recupero: 90
        },
        {
          titolo: "Leg curl",
          serie: 3,
          ripetizioni: 15,
          recupero: 45
        },
        {
          titolo: "Dips machine",
          serie: 3,
          ripetizioni: 15,
          recupero: 45
        },
        {
          titolo: "Addominali parallele obliqui",
          serie: 4,
          ripetizioni: 20,
          recupero: 60
        }
      ]
    },
    {
      titolo: "Workout D",
      numeroEsercizi: 7,
      durata: 85,
      gruppiMuscolari: "petto, dorso, tricipiti",
      esercizi: [
        {
          titolo: "Panca inclinata 30°",
          serie: 4,
          ripetizioni: 8,
          recupero: 120
        },
        {
          titolo: "Trazioni neutre",
          serie: 1,
          ripetizioni: 35,
          recupero: 60
        },
        {
          titolo: "Trap bar bent over row",
          serie: 4,
          ripetizioni: 15,
          recupero: 60
        },
        {
          titolo: "Pull down",
          serie: 4,
          ripetizioni: 10,
          recupero: 60
        },
        {
          titolo: "French press manubri",
          serie: 4,
          ripetizioni: 8,
          recupero: 70
        },
        {
          titolo: "Tricipiti corda triangolo",
          serie: 4,
          ripetizioni: 12,
          recupero: 70
        }
      ]
    }
  ];

  //template
  return (
    <>
      <div className="container">

        <h1 className="text-center py-3">LE TUE SCHEDE DI ALLENAMENTO</h1>

        <div className="row row-cols-3 row-gap-4">

          {
            schede.map(workout => (

              <div className="col">
                <div id="workout-card" className="card">
                  <div className="card-header">
                    <h2 className="m-0 text-center">{workout.titolo}</h2>
                  </div>
                  <div className="card-body">
                    <h4>Durata allenamento: {workout.durata} minuti</h4>
                    <h4>Numero di esercizi: {workout.numeroEsercizi}</h4>
                    <h4 className="m-0">Gruppi: {workout.gruppiMuscolari}</h4>
                  </div>
                  <div className="card-footer">
                    <div className="div d-flex justify-content-center gap-2">
                      <a className="btn btn-sm btn-success" href="#">Visualizza</a>
                      <a className="btn btn-sm btn-warning" href="#">Modifica</a>
                      <a className="btn btn-sm btn-danger" href="#">Elimina</a>
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