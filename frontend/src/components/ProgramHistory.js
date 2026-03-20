import { useEffect, useState } from "react";
import axios from "axios";

function ProgramHistory({ setCode, setLanguage, setInput }) {

  const [programs, setPrograms] = useState([]);

  const fetchPrograms = async () => {

    const response = await axios.get(
      "http://localhost:5000/api/programs"
    );

    setPrograms(response.data);

  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const loadProgram = (program) => {

    setCode(program.code);
    setLanguage(program.language);
    setInput(program.input || "");

  };

  const deleteProgram = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/programs/${id}`
    );

    fetchPrograms();

  };

  return (

    <div>

      <h2>Program History</h2>

      {programs.map((program) => (

        <div key={program._id}>

          <button onClick={() => loadProgram(program)}>
            {program.title}
          </button>

          <button onClick={() => deleteProgram(program._id)}>
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}

export default ProgramHistory;