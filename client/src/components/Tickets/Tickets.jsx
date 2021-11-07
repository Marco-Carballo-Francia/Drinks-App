import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTickets } from "../../redux/actions/actions";

const Tickets = () => {
  const dispatch = useDispatch();
  const { user, tickets } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserTickets(user));
  }, [dispatch, user]);

  return (
    <div>
      {tickets &&
        tickets.map((x) => (
          <div>
            <h2>{x.item}</h2>
          </div>
        ))}
    </div>
  );
};

export default Tickets;
