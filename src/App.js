import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies, fetchUsers, fetchCars } from "./actions";
import { getData } from "./selector";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetch = useCallback(async () => {
    await dispatch(fetchCompanies());
    await dispatch(fetchUsers());
    await dispatch(fetchCars());
    setLoading(false);
  }, [dispatch]);
  
  useEffect(() => {
    fetch();
  }, [fetch]);

  const data = useSelector(getData);

  return loading ? (
    <div>...loading</div>
  ) : (
    <div>
      {data.map((company) => (
        <div key={company.id}>
          <div>company: {company.name}</div>
          <div>owner: {company.owner.name}</div>
          <div>car: {company.owner.car.name}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
