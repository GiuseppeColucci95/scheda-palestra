import { useParams } from "react-router-dom";

export default function WorkoutPage() {

  //datas
  const { id } = useParams();

  const schede = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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

  const workout = schede.find(workout => workout.id == id);

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

        <div class="d-block d-sm-none">
          {
            workout.esercizi.map(esercizio => (
              <div key={esercizio.titolo} class="border p-2">
                <div class="row">
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