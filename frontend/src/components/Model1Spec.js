import React, { useState } from "react";
import model1SpecStyles from "./Model1Spec.module.css"; // Ensure you have the CSS file in the same folder

function Model1Spec() {




  const [activeSection, setActiveSection] = useState(null);

  // Content mapping
  const contentSections = {
    Farmers: `Utilizes drones for precise and efficient spraying of fertilizers and pesticides. Thus, 
    improving crop health and reducing chemical exposure. There is also no scheduling delay with the spraying services.`,
    SurveyingAndReconnaissance: `Utilizes drones equipped with cameras and sensors to capture and transmit real-time
     data for surveying, urban planning, and disaster response.`,
    ForestryService: `Drones are deployed by the forestry service to create fire breaks efficiently. These unmanned
     aerial vehicles clear strips of vegetation to prevent the spread of wildfires by acting as barriers. This technique 
     is essential in forest management, particularly in areas prone to frequent fires, enabling quicker, and safer fire control.`,
    PoisonControlCenter: `In emergencies involving venomous bites, a drone will be dispatched to deliver antivenom to victims 
    located in areas that are hard to reach by traditional methods. This rapid delivery system reduces response times, potentially 
    saving lives.`,
    Transport: `This drone application focuses on transporting substantial loads, up to 300 pounds, to designated sites. The drones
     are designed for vertical take-off and landing, making them ideal for delivering supplies directly to remote or difficult to
      access areas, such as parking lots or unprepared fields.`,
    CoastGuardOrNavy: `Drones can be employed by the Coast Guard and Navy for precision airdrops of fire retardant, which contain
     fires on marine vessels. These drones can carry up to 30 - 55 gallons of retardant, allowing them to respond quickly to 
     emergency situations at sea. This could potentially save vessels and lives by controlling fires before they spread.`,
    SearchAndRescue: `Search and rescue operations employ drones equipped with thermal imaging to locate individuals by their 
    heat signatures. Once targets are identified, these drones can also airdrop essential supplies directly to the location, providing 
    immediate assistance in critical situations.`,
    Military: `In military operations, drones provide dynamic ground support through aerial machine gun attacks. These drones are 
    deployed to engage ground targets from the air, offering cover and strategic advantages without sacrificing manned aircraft. 
    These drones can also be employed by the military for cost-effective area surveillance and tactical operations, such as deploying 
    small bombs on specific targets such as trucks. This capability is essential for maintaining continuous monitoring and executing
     precise strikes with minimal collateral damage.`
  };
  

  // Function to handle clicking on a title
  const handleTitleClick = (sectionKey) => {
    setActiveSection(sectionKey); 
  };
  return (

    <div className={model1SpecStyles.container}>
    <div>
        <div className={model1SpecStyles.titleButtons}>
          {Object.keys(contentSections).map(key => (
            <button
              key={key}
              onClick={() => handleTitleClick(key)}
              className={model1SpecStyles.titleButton}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>
        <aside className={model1SpecStyles.textContent}>
          <p>
            {activeSection ? contentSections[activeSection] : 'Select a topic to display information.'}
          </p>
        </aside>
      </div>
      <div className={model1SpecStyles.tableContent}>

      <table >
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
    </div>
  );
}

export default Model1Spec;
