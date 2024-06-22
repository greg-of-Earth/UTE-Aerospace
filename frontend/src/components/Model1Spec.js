import React from "react";
import model1SpecStyles from "./Model1Spec.module.css"; // Ensure you have the CSS file in the same folder

function Model1Spec() {
  return (
    <div className={model1SpecStyles.container}>
      <aside className={model1SpecStyles.textContent}>
        <p>
          The use of a farm drone to spray 30 gallons minimum, will allow 10
          acres to be sprayed at a time. The drone is designed for refueling and
          spray replenishment of 10 minutes from landing to take off, offering a
          rapid turnaround to support multiple missions per day. A chemical
          dispersion rate is baselined at 3 gallons per acre, but can be
          adjusted between 2 to 5 gallons per acre. The CONOPS for delivering
          the fertilizer and pesticides will change based upon actual turnaround
          speed, chemical use per acre, cruise speed, and needed repairs. The
          following CONOPS assumes the use of two farm or ranch hands.
        </p>
      </aside>

      <table className={model1SpecStyles.tableContent}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Start Time</th>
            <th>Finish Time</th>
            <th>Chemical Used</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Touch down</td>
            <td>00:00</td>
            <td>00:30</td>
            <td></td>
            <td>Propeller Stopped</td>
          </tr>
          <tr>
            <td>Chemical storage refilled</td>
            <td>00:30</td>
            <td>03:30</td>
            <td>Fertilizer</td>
            <td>10 gpm for 3 minutes</td>
          </tr>
          <tr>
            <td>Fuel Fill</td>
            <td>02:00</td>
            <td>02:30</td>
            <td>Fuel</td>
            <td>10 gpm for 1/2 minutes (5 gal top up)</td>
          </tr>
          <tr>
            <td>Program update</td>
            <td>02:30</td>
            <td>06:30</td>
            <td></td>
            <td>Next area to be sprayed</td>
          </tr>
          <tr>
            <td>Take Off</td>
            <td>06:30</td>
            <td>07:30</td>
            <td></td>
            <td>Max power for 5 minutes max</td>
          </tr>
          <tr>
            <td>Flight to field</td>
            <td>07:30</td>
            <td>13:30</td>
            <td></td>
            <td>Assumed 5 mile radius from base</td>
          </tr>
          <tr>
            <td>Spray field</td>
            <td>13:30</td>
            <td>18:30</td>
            <td></td>
            <td>10 acres</td>
          </tr>
          <tr>
            <td>Fly to base</td>
            <td>18:30</td>
            <td>23:30</td>
            <td></td>
            <td>10 min. total time from base to field</td>
          </tr>
          {/* Adding the additional rows for complete operations per day */}
          <tr className={model1SpecStyles.centeredRow}>
            <td colSpan="5">
              30 trips per day or 300 acres covered per 12 hour day at 60 mph
              (minimum speed)
            </td>
          </tr>
          <tr className={model1SpecStyles.centeredRow}>
            <td colSpan="5">
              1 trip every 14 minutes if no transportation time is involved.
              <br />
              514 acres covered per 12 hour day Maximum.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Model1Spec;
